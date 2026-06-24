import { festivals } from "../data/sites";
import { AdinkraIcon } from "../components/AdinkraIcon";

export function FestivalsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-12">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-clay mb-3">
        Festival Discovery
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-bark mb-3">
        Celebrations the world hasn't met yet.
      </h1>
      <p className="text-bark/70 max-w-xl mb-10">
        Most of Ghana's festivals draw entirely local crowds — not because
        they're small, but because no one has built the bridge for visitors
        to find them.
      </p>

      <div className="flex flex-col gap-6">
        {festivals.map((f) => (
          <div key={f.id} className="border-2 border-bark/10 p-6 bg-parchment">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-forest mb-1">
                  {f.ethnicGroup} · {f.region}
                </p>
                <h2 className="font-display text-2xl text-bark">{f.name}</h2>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-[10px] uppercase tracking-wider text-bark/40">
                  When
                </p>
                <p className="font-mono text-xs text-clay">{f.season}</p>
              </div>
            </div>
            <p className="text-bark/80 mb-4">{f.description}</p>
            <div className="flex items-center gap-2 font-mono text-xs text-bark/50">
              <AdinkraIcon symbol="sankofa" size={14} color="#3D2B1F" />
              <span>{f.accommodation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
