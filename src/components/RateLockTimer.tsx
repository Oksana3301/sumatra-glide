import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface RateLockTimerProps {
  durationSeconds?: number;
  onExpire?: () => void;
  className?: string;
}

export const RateLockTimer = ({
  durationSeconds = 600,
  onExpire,
  className,
}: RateLockTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = (timeLeft / durationSeconds) * 100;
  const isLow = percentage < 25;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span className="font-medium">Rate Lock</span>
        </div>
        <span
          className={cn(
            "font-mono font-bold text-lg tabular-nums",
            isLow ? "text-warning" : "text-foreground"
          )}
        >
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full transition-all duration-1000 ease-linear rounded-full",
            isLow ? "bg-warning" : "bg-success"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {isLow && (
        <p className="text-xs text-warning">
          Rate expires soon. Complete payment to lock this exchange rate.
        </p>
      )}
    </div>
  );
};
