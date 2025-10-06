import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VerifiedBadgeProps {
  lastVerified?: string;
  source?: string;
  className?: string;
}

export const VerifiedBadge = ({ lastVerified, source, className }: VerifiedBadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success/10 border border-success/30",
        "animate-verified-pulse",
        className
      )}
    >
      <CheckCircle2 className="h-3.5 w-3.5 text-success" />
      <span className="text-xs font-medium text-success">Verified</span>
      {lastVerified && (
        <span className="text-xs text-success/70 ml-1">
          {lastVerified}
        </span>
      )}
    </div>
  );
};
