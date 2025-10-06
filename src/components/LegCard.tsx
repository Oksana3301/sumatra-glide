import { Plane, Hotel, Ship, Anchor, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { VerifiedBadge } from "./VerifiedBadge";
import { WarningBanner } from "./WarningBanner";

type LegType = "flight" | "hotel" | "ferry" | "charter";

interface LegCardProps {
  type: LegType;
  origin: string;
  destination: string;
  date?: string;
  time?: string;
  duration?: string;
  verified?: boolean;
  warning?: string;
  className?: string;
}

const ICONS = {
  flight: Plane,
  hotel: Hotel,
  ferry: Ship,
  charter: Anchor,
};

export const LegCard = ({ 
  type, 
  origin, 
  destination, 
  date, 
  time, 
  duration,
  verified = false,
  warning,
  className 
}: LegCardProps) => {
  const Icon = ICONS[type];

  return (
    <div className={cn("relative pl-8", className)}>
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-md" />
      
      {/* Card */}
      <div className="gradient-card rounded-xl border border-border p-5 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                {type}
              </div>
              <div className="font-semibold text-lg">
                {origin} <ArrowRight className="inline h-4 w-4 mx-1" /> {destination}
              </div>
            </div>
          </div>
          {verified && <VerifiedBadge lastVerified="Today" />}
        </div>

        {(date || time || duration) && (
          <div className="flex gap-4 text-sm text-muted-foreground mb-3">
            {date && <span>{date}</span>}
            {time && <span>•</span>}
            {time && <span>{time}</span>}
            {duration && <span>•</span>}
            {duration && <span>{duration}</span>}
          </div>
        )}

        {warning && (
          <WarningBanner type="warning" className="mt-3">
            {warning}
          </WarningBanner>
        )}
      </div>
    </div>
  );
};
