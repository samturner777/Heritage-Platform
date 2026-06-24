import { Link, useLocation } from "react-router-dom";
import { AdinkraIcon } from "./AdinkraIcon";

const NAV_ITEMS = [
  { to: "/", label: "Map" },
  { to: "/festivals", label: "Festivals" },
  { to: "/planner", label: "Trip Planner" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="border-b-2 border-bark/10 bg-parchment sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <AdinkraIcon symbol="gye-nyame" size={22} color="#B8472E" />
          <span className="font-display text-lg text-bark tracking-tight">
            Heritage<span className="text-clay">.</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono text-xs px-3 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-bark text-parchment"
                    : "text-bark/60 hover:text-bark"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
