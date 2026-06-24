import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { sites, categories, languages } from "../data/sites";
import { AdinkraIcon } from "../components/AdinkraIcon";
import { SiteQRCode } from "../components/SiteQRCode";
import { LanguageToggle } from "../components/LanguageToggle";

export function SiteDetailPage() {
  const { siteId } = useParams();
  const navigate = useNavigate();
  const site = sites.find((s) => s.id === siteId || s.qrSlug === siteId);
  const [lang, setLang] = useState("en");

  if (!site) {
    return (
      <div className="px-6 md:px-10 py-16 max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-bark/50">Site not found.</p>
        <Link to="/" className="font-mono text-sm text-clay underline">
          ← Back to the map
        </Link>
      </div>
    );
  }

  const cat = categories[site.category];
  const langLabel = languages.find((l) => l.code === lang)?.label;
  const hasAudio = site.audioAvailable.includes(lang);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
      <button
        onClick={() => navigate("/")}
        className="font-mono text-xs text-bark/50 hover:text-clay transition-colors mb-6"
      >
        ← Back to the map
      </button>

      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: cat.color }}
        >
          <AdinkraIcon symbol={cat.symbol} size={15} color="#FAF6EE" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-bark/50">
          {cat.label} · {site.region}
        </span>
      </div>

      <h1 className="font-display text-4xl md:text-5xl text-bark mb-2">{site.name}</h1>
      <p className="font-mono text-xs text-bark/40 mb-6">
        {site.coords.lat.toFixed(4)}°N, {Math.abs(site.coords.lng).toFixed(4)}°
        {site.coords.lng < 0 ? "W" : "E"} · Built {site.yearBuilt}
      </p>

      <div className="grid md:grid-cols-[2fr_1fr] gap-8">
        <div>
          {site.images?.[0] && (
            <img
              src={site.images[0]}
              alt={site.name}
              className="w-full h-72 object-cover rounded-sm mb-6 border-2 border-bark/10"
            />
          )}

          {site.sensitivity === "sacred-limited-info" && (
            <div className="bg-forest/10 border-l-4 border-forest p-4 mb-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-forest mb-1">
                Community-guided site
              </p>
              <p className="text-sm text-bark/80">
                This is a living sacred site. Details here are intentionally limited
                out of respect for its custodians — visit with a community guide to
                learn more.
              </p>
            </div>
          )}

          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-wider text-clay mb-3">
              AI Storytelling Guide
            </p>
            <p className="font-display text-lg md:text-xl leading-relaxed text-bark italic">
              {site.narrative}
            </p>
          </div>

          <div className="bg-bark/5 p-4 rounded-sm">
            <p className="font-mono text-xs uppercase tracking-wider text-bark/50 mb-3">
              Listen in your language
            </p>
            <LanguageToggle
              available={site.audioAvailable}
              selected={lang}
              onSelect={setLang}
            />
            <div className="mt-3 flex items-center gap-2">
              {hasAudio ? (
                <button className="flex items-center gap-2 font-mono text-xs bg-forest text-parchment px-4 py-2 rounded-full hover:bg-forest/90 transition-colors">
                  ▶ Play narration in {langLabel}
                </button>
              ) : (
                <p className="font-mono text-xs text-bark/40">
                  {langLabel} narration is in production — check back soon.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <SiteQRCode site={site} baseUrl="https://heritage.theitguy.app" />
          <div className="font-mono text-[11px] text-bark/50 leading-relaxed border-t border-bark/10 pt-4">
            <p className="uppercase tracking-wider text-bark/70 mb-1">Why this matters</p>
            <p>
              Print this code on a small plaque at the physical site. Anyone with
              a phone camera can scan it and instantly access this page — no app
              download required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
