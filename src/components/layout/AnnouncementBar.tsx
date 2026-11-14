import React from "react";
import { Sparkles, MapPin } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Store Announcement"
      className="bg-luxury-charcoal text-[#D6B878] border-b border-[#3D3A30] text-xs py-2 px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-4 text-center tracking-widestLuxury uppercase font-medium">
        <span className="hidden sm:inline-flex items-center gap-1.5 opacity-80 text-[11px]">
          <MapPin className="w-3 h-3 text-luxury-gold shrink-0" />
          Kurla West, Mumbai
        </span>
        <span className="hidden sm:inline opacity-40">•</span>
        <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs">
          <Sparkles className="w-3 h-3 text-luxury-gold shrink-0 animate-pulse" />
          Welcome to Mayura Jewellers | Discover Timeless Elegance
        </span>
      </div>
    </aside>
  );
}

