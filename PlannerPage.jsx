import { TripPlanner } from "../components/TripPlanner";

export function PlannerPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-12">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-clay mb-3">
        Plan Your Visit
      </p>
      <h1 className="font-display text-4xl md:text-5xl text-bark mb-3">
        Tell us what you love. We'll plan the rest.
      </h1>
      <p className="text-bark/70 max-w-xl mb-10">
        No generic top-10 lists — describe your trip in plain language and
        get an itinerary built from real, documented sites.
      </p>
      <TripPlanner />
    </div>
  );
}
