import { QrCode, Copy, ExternalLink, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface QRDrawerProps {
  address: string;
  amount: string;
  network: string;
  onClose?: () => void;
}

export const QRDrawer = ({ address, amount, network, onClose }: QRDrawerProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Mock QR code placeholder (in real app, use qrcode library)
  const qrPlaceholder = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(address)}`;

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card border border-border rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Send Crypto Payment</h3>
        {onClose && (
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {/* QR Code */}
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-white rounded-lg border-2 border-border">
          <img src={qrPlaceholder} alt="Payment QR Code" className="w-48 h-48" />
        </div>
      </div>

      {/* Network badge */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase">
          {network}
        </span>
        <span className="text-sm text-muted-foreground">•</span>
        <span className="text-sm font-medium">{amount}</span>
      </div>

      {/* Address */}
      <div className="space-y-2 mb-6">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Wallet Address
        </label>
        <div className="flex items-center gap-2">
          <code className="flex-1 px-3 py-2 bg-muted rounded-lg text-xs font-mono break-all">
            {address}
          </code>
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className={cn(
              "shrink-0 transition-colors",
              copied && "bg-success/10 border-success text-success"
            )}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-4 rounded-lg bg-accent/30 border border-accent/50 space-y-2 mb-6">
        <p className="text-xs font-semibold text-accent-foreground">Instructions:</p>
        <ol className="text-xs text-accent-foreground/80 space-y-1 list-decimal list-inside leading-relaxed">
          <li>Scan QR code or copy address above</li>
          <li>Send exact amount from your wallet</li>
          <li>Wait for on-chain confirmation (1-5 min)</li>
          <li>You'll receive instant email confirmation</li>
        </ol>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="outline" className="flex-1" onClick={handleCopy}>
          <Copy className="h-4 w-4 mr-2" />
          Copy Address
        </Button>
        <Button variant="outline" className="flex-1">
          <ExternalLink className="h-4 w-4 mr-2" />
          Explorer
        </Button>
      </div>
    </div>
  );
};
