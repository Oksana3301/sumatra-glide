import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline vertical line */}
      <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border" />
      
      {/* Timeline items */}
      <div className="space-y-6">{children}</div>
    </div>
  );
};

interface TimelineItemProps {
  children: ReactNode;
  active?: boolean;
  completed?: boolean;
  className?: string;
}

export const TimelineItem = ({
  children,
  active = false,
  completed = false,
  className,
}: TimelineItemProps) => {
  return (
    <div className={cn("relative pl-8", className)}>
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-background shadow-md",
          completed && "bg-success",
          active && "bg-primary animate-pulse",
          !completed && !active && "bg-muted"
        )}
      />
      
      {/* Content */}
      {children}
    </div>
  );
};
