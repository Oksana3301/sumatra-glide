import { CreditCard, Smartphone, Coins } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type PaymentMethod = "card" | "apple" | "google" | "crypto";

interface PaymentMethodCardProps {
  method: PaymentMethod;
  selected?: boolean;
  onSelect?: () => void;
}

const METHODS = {
  card: { 
    icon: CreditCard, 
    label: "Credit/Debit Card", 
    desc: "Visa, Mastercard, Amex" 
  },
  apple: { 
    icon: Smartphone, 
    label: "Apple Pay", 
    desc: "Fast & secure" 
  },
  google: { 
    icon: Smartphone, 
    label: "Google Pay", 
    desc: "One-tap checkout" 
  },
  crypto: { 
    icon: Coins, 
    label: "Cryptocurrency", 
    desc: "USDC or ETH" 
  },
};

export const PaymentMethodCard = ({ method, selected, onSelect }: PaymentMethodCardProps) => {
  const config = METHODS[method];
  const Icon = config.icon;

  return (
    <button
      onClick={onSelect}
      className={cn(
        "w-full p-4 rounded-lg border-2 transition-all duration-300 text-left",
        "hover:border-primary/50 hover:shadow-md",
        selected 
          ? "border-primary bg-primary/5 shadow-glow" 
          : "border-border bg-card"
      )}
    >
      <div className="flex items-start gap-3">
        <div className={cn(
          "p-2 rounded-lg",
          selected ? "bg-primary text-primary-foreground" : "bg-muted"
        )}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="font-semibold mb-1">{config.label}</div>
          <div className="text-sm text-muted-foreground">{config.desc}</div>
        </div>
        {selected && (
          <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary-foreground" />
          </div>
        )}
      </div>
    </button>
  );
};
