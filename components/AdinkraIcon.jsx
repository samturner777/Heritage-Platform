// Simplified, stylized renderings of Adinkra symbols used as functional
// interface markers (category icons, dividers) — not decorative filler.

export function AdinkraIcon({ symbol, size = 24, color = "currentColor", className = "" }) {
  const props = { width: size, height: size, viewBox: "0 0 48 48", className, fill: "none" };

  switch (symbol) {
    case "gye-nyame":
      // Supremacy of God — concentric ram-horn spiral motif
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="20" stroke={color} strokeWidth="2" />
          <path
            d="M24 8c-6 0-10 4-10 9 0 4 3 6 6 6s5-2 5-5-2-4-4-4-3 1-3 3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M24 40c6 0 10-4 10-9 0-4-3-6-6-6s-5 2-5 5 2 4 4 4 3-1 3-3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "nyame-dua":
      // God's altar — three-legged stand with crossbar
      return (
        <svg {...props}>
          <path d="M24 6v20" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M12 14h24" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M24 26L14 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M24 26L24 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M24 26L34 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "akoma":
      // The heart — patience and tolerance
      return (
        <svg {...props}>
          <path
            d="M24 38C24 38 8 28 8 17c0-5.5 4-9 9-9 3.5 0 6 2 7 5 1-3 3.5-5 7-5 5 0 9 3.5 9 9 0 11-16 21-16 21z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "duafe":
      // Wooden comb — care and feminine virtue
      return (
        <svg {...props}>
          <path d="M14 6c0 6 5 8 10 8s10-2 10-8" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M24 14v28" stroke={color} strokeWidth="2" strokeLinecap="round" />
          {[10, 15, 20, 24, 28, 33, 38].map((x) => (
            <path key={x} d={`M${x} 14v10`} stroke={color} strokeWidth="2" strokeLinecap="round" />
          ))}
        </svg>
      );
    case "sankofa":
      // Go back and get it — bird reaching backward for an egg
      return (
        <svg {...props}>
          <path
            d="M14 34c0-8 5-14 13-14 5 0 8 3 8 3"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M35 23c2-1 3-3 2-5-1-1.5-3-1.5-4 0"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="14" cy="36" r="3" stroke={color} strokeWidth="2" />
          <path d="M14 34c-3 0-5 2-5 5" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}
