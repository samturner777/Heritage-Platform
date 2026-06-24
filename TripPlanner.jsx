import { useState } from "react";
import { sites, festivals } from "../data/sites";

const SUGGESTIONS = [
  "I have 3 days in Accra and I love history",
  "2 days, interested in nature and waterfalls",
  "1 week, want festivals and sacred sites",
];

export function TripPlanner() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [plan, setPlan] = useState(null);

  async function generatePlan(promptText) {
    setLoading(true);
    setError(null);
    setPlan(null);

    const siteList = sites
      .map((s) => `- ${s.name} (${s.category}, ${s.region}): ${s.blurb}`)
      .join("\n");
    const festivalList = festivals
      .map((f) => `- ${f.name} (${f.ethnicGroup}, ${f.season}): ${f.blurb}`)
      .join("\n");

    const systemPrompt = `You are the AI Trip Planner for the African Heritage Discovery Platform, focused on Ghana. A traveler describes their trip and interests in plain language. Generate a personalized itinerary using ONLY the real sites and festivals provided below — do not invent place names.

AVAILABLE SITES:
${siteList}

AVAILABLE FESTIVALS:
${festivalList}

Respond ONLY with valid JSON, no markdown fences, no preamble, matching exactly this shape:
{
  "summary": "one warm sentence summarizing the trip",
  "days": [
    { "day": 1, "title": "short day title", "items": [{"time": "Morning", "activity": "...", "note": "..."}] }
  ],
  "foodNote": "1-2 sentences of food/dining suggestions appropriate to the region(s) visited",
  "transportNote": "1-2 sentences of practical transport guidance for getting between these sites in Ghana"
}`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: "user", content: promptText }],
        }),
      });

      const data = await response.json();
      const textBlock = data?.content?.find((b) => b.type === "text");
      if (!textBlock) throw new Error("No response generated");

      const cleaned = textBlock.text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(cleaned);
      setPlan(parsed);
    } catch (err) {
      console.error(err);
      setError("Couldn't generate a plan just now. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-bark text-parchment p-6 md:p-8 rounded-sm">
      <p className="font-mono text-xs uppercase tracking-wider text-gold mb-2">
        AI Trip Planner
      </p>
      <h3 className="font-display text-2xl md:text-3xl mb-4">
        Tell us your trip, in your own words
      </h3>

      <div className="flex flex-col gap-3 mb-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. I have 3 days in Accra and I love history"
          className="w-full bg-parchment/10 border border-parchment/25 rounded-sm p-3 text-parchment placeholder:text-parchment/40 font-body text-sm resize-none focus:outline-none focus:border-gold"
          rows={2}
        />
        <div className="flex flex-wrap gap-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="font-mono text-[11px] px-3 py-1.5 border border-parchment/20 rounded-full text-parchment/70 hover:border-gold hover:text-gold transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
        <button
          onClick={() => generatePlan(input)}
          disabled={!input.trim() || loading}
          className="self-start bg-clay hover:bg-clay/90 disabled:bg-clay/30 disabled:cursor-not-allowed text-parchment font-body font-semibold text-sm px-5 py-2.5 rounded-sm transition-colors"
        >
          {loading ? "Planning…" : "Plan my trip"}
        </button>
      </div>

      {error && <p className="text-clay text-sm font-mono">{error}</p>}

      {plan && (
        <div className="mt-6 border-t border-parchment/15 pt-6 flex flex-col gap-5">
          <p className="font-display text-lg italic text-gold">{plan.summary}</p>

          {plan.days?.map((day) => (
            <div key={day.day}>
              <p className="font-mono text-xs uppercase tracking-wider text-clay mb-2">
                Day {day.day} — {day.title}
              </p>
              <div className="flex flex-col gap-2">
                {day.items?.map((item, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="font-mono text-parchment/50 w-20 shrink-0">
                      {item.time}
                    </span>
                    <div>
                      <p className="text-parchment">{item.activity}</p>
                      {item.note && (
                        <p className="text-parchment/60 text-xs mt-0.5">{item.note}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="grid md:grid-cols-2 gap-4 pt-2">
            {plan.foodNote && (
              <div className="bg-parchment/5 p-3 rounded-sm">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gold mb-1">
                  Food
                </p>
                <p className="text-sm text-parchment/80">{plan.foodNote}</p>
              </div>
            )}
            {plan.transportNote && (
              <div className="bg-parchment/5 p-3 rounded-sm">
                <p className="font-mono text-[10px] uppercase tracking-wider text-gold mb-1">
                  Getting around
                </p>
                <p className="text-sm text-parchment/80">{plan.transportNote}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
