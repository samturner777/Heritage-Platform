import { languages } from "../data/sites";

export function LanguageToggle({ available, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((lang) => {
        const isAvailable = available.includes(lang.code);
        const isSelected = selected === lang.code;
        return (
          <button
            key={lang.code}
            disabled={!isAvailable}
            onClick={() => isAvailable && onSelect(lang.code)}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
              isSelected
                ? "bg-forest text-parchment border-forest"
                : isAvailable
                ? "border-bark/25 text-bark hover:border-forest hover:text-forest"
                : "border-bark/10 text-bark/30 cursor-not-allowed"
            }`}
            title={isAvailable ? `Narration in ${lang.label}` : `${lang.label} narration coming soon`}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
