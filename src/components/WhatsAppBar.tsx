import { MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WhatsAppBarProps {
  phoneNumber?: string;
  message?: string;
  dismissible?: boolean;
}

export const WhatsAppBar = ({
  phoneNumber = "+6281234567890",
  message = "Hi! I need help planning my Mentawai trip",
  dismissible = true,
}: WhatsAppBarProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-gradient-to-r from-success to-success/90 text-success-foreground",
        "border-t border-success/20 shadow-lg",
        "animate-slide-up"
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="p-2 bg-success-foreground/10 rounded-lg shrink-0">
              <MessageCircle className="h-5 w-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm mb-0.5">Need help planning?</div>
              <div className="text-xs opacity-90">
                WhatsApp our concierge team • Response in &lt;2h
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              size="sm"
              className="bg-success-foreground text-success hover:bg-success-foreground/90 shadow-md"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat Now
              </a>
            </Button>

            {dismissible && (
              <button
                onClick={() => setDismissed(true)}
                className="p-1.5 hover:bg-success-foreground/10 rounded-md transition-colors"
                aria-label="Dismiss"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
