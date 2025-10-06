import { useState } from "react";
import { cn } from "@/lib/utils";

type Network = "ethereum" | "base" | "arbitrum" | "polygon";

interface NetworkOption {
  id: Network;
  name: string;
  logo: string;
  fee: string;
  speed: string;
}

const NETWORKS: NetworkOption[] = [
  { id: "ethereum", name: "Ethereum", logo: "⟠", fee: "~$15", speed: "2-5 min" },
  { id: "base", name: "Base", logo: "⬡", fee: "~$0.10", speed: "1-2 min" },
  { id: "arbitrum", name: "Arbitrum", logo: "◆", fee: "~$0.50", speed: "1-3 min" },
  { id: "polygon", name: "Polygon", logo: "⬢", fee: "~$0.05", speed: "30 sec" },
];

export const NetworkSelector = () => {
  const [selected, setSelected] = useState<Network>("base");

  return (
    <div className="w-full">
      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
        Payment Network
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {NETWORKS.map((network) => {
          const isSelected = selected === network.id;
          
          return (
            <button
              key={network.id}
              onClick={() => setSelected(network.id)}
              className={cn(
                "p-3 rounded-lg border-2 transition-all duration-150 text-left",
                "hover:border-primary/40",
                isSelected
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card"
              )}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl leading-none">{network.logo}</span>
                <span className="font-semibold text-sm">{network.name}</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{network.fee}</span>
                <span>•</span>
                <span>{network.speed}</span>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-3 p-3 rounded-lg bg-accent/30 border border-accent/50 text-xs leading-relaxed">
          <strong>Network fee:</strong> Gas fees are paid separately in ETH/MATIC and deducted from your wallet.
        </div>
      )}
    </div>
  );
};
