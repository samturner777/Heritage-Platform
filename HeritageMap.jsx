import { useState } from "react";
import { categories } from "../data/sites";
import { AdinkraIcon } from "./AdinkraIcon";

// Simplified projection box for southern Ghana, tuned to fit our demo sites.
// Not survey-accurate — built for legible pin placement, not navigation.
const BOUNDS = { minLat: 5.0, maxLat: 8.0, minLng: -0.5, maxLng: 1.2 };
const VIEW_W = 600;
const VIEW_H = 600;

function project({ lat, lng }) {
  const x = ((lng - BOUNDS.minLng) / (BOUNDS.maxLng - BOUNDS.minLng)) * VIEW_W;
  const y = VIEW_H - ((lat - BOUNDS.minLat) / (BOUNDS.maxLat - BOUNDS.minLat)) * VIEW_H;
  return { x, y };
}

export function HeritageMap({ sites, activeId, onSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full bg-forest/5 rounded-sm border-2 border-bark/10 overflow-hidden">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} className="w-full h-full">
        {/* Ambient texture: faint coastline suggestion, not a literal map */}
        <defs>
          <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M0 30L30 0" stroke="#1F5C4F" strokeWidth="0.5" opacity="0.06" />
          </pattern>
        </defs>
        <rect width={VIEW_W} height={VIEW_H} fill="url(#grid)" />

        {/* Coastline suggestion along the south */}
        <path
          d="M0 520 Q 150 500, 300 530 T 600 510 L 600 600 L 0 600 Z"
          fill="#1F5C4F"
          opacity="0.08"
        />
        <path
          d="M0 520 Q 150 500, 300 530 T 600 510"
          stroke="#1F5C4F"
          strokeWidth="2"
          opacity="0.3"
          fill="none"
        />

        {sites.map((site) => {
          const { x, y } = project(site.coords);
          const cat = categories[site.category];
          const isActive = activeId === site.id;
          const isHovered = hovered === site.id;
          return (
            <g
              key={site.id}
              transform={`translate(${x}, ${y})`}
              onClick={() => onSelect(site.id)}
              onMouseEnter={() => setHovered(site.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
            >
              <circle
                r={isActive || isHovered ? 16 : 12}
                fill={cat.color}
                opacity={isActive ? 1 : 0.85}
                stroke="#FAF6EE"
                strokeWidth="2"
                style={{ transition: "r 150ms ease" }}
              />
              <g transform="translate(-7, -7)">
                <AdinkraIcon symbol={cat.symbol} size={14} color="#FAF6EE" />
              </g>
              {(isHovered || isActive) && (
                <g transform="translate(0, -24)">
                  <rect
                    x={-60}
                    y={-22}
                    width="120"
                    height="22"
                    rx="2"
                    fill="#1C1410"
                  />
                  <text
                    x="0"
                    y="-7"
                    textAnchor="middle"
                    fill="#FAF6EE"
                    fontSize="11"
                    fontFamily="Inter, sans-serif"
                  >
                    {site.name}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
