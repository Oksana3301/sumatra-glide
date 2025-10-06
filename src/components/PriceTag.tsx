import { cn } from "@/lib/utils";

interface PriceTagProps {
  amountIDR: number;
  amountUSD?: number;
  currency?: "IDR" | "USD";
  size?: "sm" | "md" | "lg";
  showBoth?: boolean;
  className?: string;
}

export const PriceTag = ({
  amountIDR,
  amountUSD,
  currency = "IDR",
  size = "md",
  showBoth = true,
  className,
}: PriceTagProps) => {
  const formatIDR = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);

  const formatUSD = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amount);

  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-3xl",
  };

  const secondarySize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={cn("flex items-baseline gap-2", className)}>
      <span className={cn("font-bold tracking-tight", sizeClasses[size])}>
        {currency === "IDR" ? formatIDR(amountIDR) : formatUSD(amountUSD || 0)}
      </span>
      {showBoth && (
        <span className={cn("text-muted-foreground font-medium", secondarySize[size])}>
          {currency === "IDR" && amountUSD ? formatUSD(amountUSD) : formatIDR(amountIDR)}
        </span>
      )}
    </div>
  );
};
