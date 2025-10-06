import { AlertTriangle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface WarningBannerProps {
  type?: "warning" | "info";
  children: React.ReactNode;
  className?: string;
}

export const WarningBanner = ({ type = "warning", children, className }: WarningBannerProps) => {
  const Icon = type === "warning" ? AlertTriangle : Info;
  
  return (
    <div 
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border",
        type === "warning" 
          ? "bg-warning/10 border-warning/30 text-warning-foreground"
          : "bg-accent/50 border-accent text-accent-foreground",
        className
      )}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex-1 text-sm leading-relaxed">{children}</div>
    </div>
  );
};
