import { Shield, MessageCircle, CheckCircle2, Clock } from "lucide-react";

const BADGES = [
  { icon: Shield, label: "Secure Payments", desc: "Cards + Crypto" },
  { icon: MessageCircle, label: "WhatsApp Support", desc: "24/7 Concierge" },
  { icon: CheckCircle2, label: "Verified Routes", desc: "Live Updates" },
  { icon: Clock, label: "Instant Confirm", desc: "Real-time Booking" },
];

export const TrustBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {BADGES.map((badge) => (
        <div 
          key={badge.label}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
        >
          <badge.icon className="h-6 w-6 text-primary" />
          <div className="text-center">
            <div className="text-sm font-semibold">{badge.label}</div>
            <div className="text-xs text-muted-foreground">{badge.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
