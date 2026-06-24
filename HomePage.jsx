import { useState, useMemo } from "react";
import { sites, categories } from "../data/sites";
import { HeritageMap } from "../components/HeritageMap";
import { AdinkraIcon } from "../components/AdinkraIcon";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  const filteredSites = useMemo(() => {
    if (activeFilter === "all") return sites;
    return sites.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  const selectedSite = sites.find((s) => s.id === selectedId);

  return (
    <div>
      {/* Hero */}
      <section className="px-6 md:px-10 pt-12 pb-8 max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-clay mb-3">
          A digital gateway to Africa's hidden heritage
        </p>
        <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-bark max-w-3xl">
          Every site has a story.
          <br />
          <span className="italic text-forest">Most have never been told.</span>
        </h1>
        <p className="font-body text-bark/70 max-w-xl mt-5 text-base md:text-lg">
          Discover Ghana's landmarks, sacred sites, and festivals — narrated in the
          languages they were first spoken in, documented before they're forgotten.
        </p>
      </section>

      {/* Category filters */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`font-mono text-xs px-3 py-2 rounded-full border transition-colors flex items-center gap-1.5 ${
              activeFilter === "all"
                ? "bg-bark text-parchment border-bark"
                : "border-bark/20 text-bark hover:border-bark"
            }`}
          >
            All sites
          </button>
          {Object.entries(categories).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`font-mono text-xs px-3 py-2 rounded-full border transition-colors flex items-center gap-1.5 ${
                activeFilter === key
                  ? "text-parchment border-transparent"
                  : "border-bark/20 text-bark hover:border-bark"
              }`}
              style={activeFilter === key ? { backgroundColor: cat.color } : {}}
            >
              <AdinkraIcon symbol={cat.symbol} size={13} />
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Map + site list */}
      <section className="px-6 md:px-10 max-w-6xl mx-auto pb-16">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-6">
          <div className="aspect-square md:aspect-auto md:h-[560px]">
            <HeritageMap
              sites={filteredSites}
              activeId={selectedId}
              onSelect={setSelectedId}
            />
          </div>

          <div className="flex flex-col gap-3 max-h-[560px] overflow-y-auto pr-1">
            {selectedSite ? (
              <SitePreviewCard site={selectedSite} onOpen={() => navigate(`/site/${selectedSite.id}`)} />
            ) : (
              <p className="font-mono text-xs text-bark/50 px-2">
                Tap a pin to preview a site →
              </p>
            )}
            <div className="adinkra-divider text-bark/30 my-1">
              <AdinkraIcon symbol="sankofa" size={16} color="#3D2B1F" />
            </div>
            {filteredSites
              .filter((s) => s.id !== selectedId)
              .map((site) => (
                <SiteListRow
                  key={site.id}
                  site={site}
                  onClick={() => setSelectedId(site.id)}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SitePreviewCard({ site, onOpen }) {
  const cat = categories[site.category];
  return (
    <div className="border-2 border-bark p-4 bg-parchment">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: cat.color }}
        >
          <AdinkraIcon symbol={cat.symbol} size={13} color="#FAF6EE" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-bark/50">
          {cat.label} · {site.region}
        </span>
      </div>
      <h3 className="font-display text-xl text-bark mb-1">{site.name}</h3>
      <p className="text-sm text-bark/70 mb-3">{site.blurb}</p>
      <button
        onClick={onOpen}
        className="font-mono text-xs text-clay underline hover:text-bark transition-colors"
      >
        Read the full story →
      </button>
    </div>
  );
}

function SiteListRow({ site, onClick }) {
  const cat = categories[site.category];
  return (
    <button
      onClick={onClick}
      className="text-left flex items-center gap-3 p-3 hover:bg-bark/5 transition-colors rounded-sm group"
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: cat.color, opacity: 0.85 }}
      >
        <AdinkraIcon symbol={cat.symbol} size={16} color="#FAF6EE" />
      </div>
      <div>
        <p className="font-body text-sm text-bark font-medium group-hover:text-clay transition-colors">
          {site.name}
        </p>
        <p className="font-mono text-[11px] text-bark/45">{site.region}</p>
      </div>
    </button>
  );
}
