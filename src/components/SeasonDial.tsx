import { useState } from "react";
import { cn } from "@/lib/utils";

const SEASONS = [
  { name: "Jan-Feb", swell: "moderate", crowd: "high", note: "Peak tourist season" },
  { name: "Mar-May", swell: "excellent", crowd: "moderate", note: "Prime balance" },
  { name: "Jun-Aug", swell: "good", crowd: "moderate", note: "Consistent swells" },
  { name: "Sep-Oct", swell: "excellent", crowd: "low", note: "Prime balance" },
  { name: "Nov-Dec", swell: "moderate", crowd: "moderate", note: "Building season" },
];

const SWELL_COLORS = {
  excellent: "bg-success text-success-foreground",
  good: "bg-primary text-primary-foreground",
  moderate: "bg-secondary text-secondary-foreground",
};

export const SeasonDial = () => {
  const [selected, setSelected] = useState(1); // Default Mar-May

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">Best Time to Visit</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {SEASONS.map((season, idx) => (
          <button
            key={season.name}
            onClick={() => setSelected(idx)}
            className={cn(
              "p-4 rounded-lg border-2 transition-all duration-300",
              "hover:scale-105 hover:shadow-md",
              selected === idx 
                ? "border-primary bg-primary/5 shadow-glow" 
                : "border-border bg-card hover:border-primary/50"
            )}
          >
            <div className="text-sm font-semibold mb-2">{season.name}</div>
            <div className={cn(
              "text-xs px-2 py-1 rounded-full inline-block mb-2",
              SWELL_COLORS[season.swell]
            )}>
              {season.swell}
            </div>
            <div className="text-xs text-muted-foreground">{season.note}</div>
          </button>
        ))}
      </div>
      <div className="mt-6 p-4 rounded-lg bg-accent border border-accent-foreground/20">
        <p className="text-sm text-accent-foreground">
          <strong>Prime Season:</strong> March–May and September–October offer the best balance of excellent swells and manageable crowds.
        </p>
      </div>
    </div>
  );
};
