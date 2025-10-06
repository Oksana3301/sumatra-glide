import { useState } from "react";
import { Plane, Ship, Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

type TransportType = "flight" | "ferry" | "charter";

interface TransportOption {
  type: TransportType;
  label: string;
  duration?: string;
  price?: string;
  available: boolean;
}

const OPTIONS: TransportOption[] = [
  { type: "flight", label: "Commercial Flight", duration: "1h 15m", price: "From $120", available: true },
  { type: "ferry", label: "Fast Ferry", duration: "4h 30m", price: "From $25", available: true },
  { type: "charter", label: "Private Charter", duration: "Flexible", price: "From $800", available: false },
];

const ICONS = {
  flight: Plane,
  ferry: Ship,
  charter: Anchor,
};

export const TransportPicker = () => {
  const [selected, setSelected] = useState<TransportType>("ferry");

  return (
    <div className="w-full max-w-2xl">
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        Select Transport
      </h3>
      <div className="grid gap-3">
        {OPTIONS.map((option) => {
          const Icon = ICONS[option.type];
          const isSelected = selected === option.type;

          return (
            <button
              key={option.type}
              onClick={() => option.available && setSelected(option.type)}
              disabled={!option.available}
              className={cn(
                "w-full p-4 rounded-lg border-2 transition-all duration-200 text-left",
                "hover:border-primary/50 hover:shadow-md",
                isSelected
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-card",
                !option.available && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "p-2.5 rounded-lg shrink-0 transition-colors",
                    isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold">{option.label}</span>
                    {!option.available && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        Coming Soon
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {option.duration && <span>{option.duration}</span>}
                    {option.duration && option.price && <span>•</span>}
                    {option.price && <span className="font-medium">{option.price}</span>}
                  </div>
                </div>

                {isSelected && (
                  <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
