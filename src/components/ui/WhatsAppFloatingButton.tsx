"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = getWhatsAppUrl({ type: "general" });

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <div className="relative flex items-center">
        {/* Tooltip on hover/desktop */}
        <span
          className={`hidden md:inline-block absolute right-full mr-3 px-3 py-1.5 bg-luxury-charcoal text-white text-xs uppercase tracking-wider font-medium rounded shadow-lg whitespace-nowrap border border-luxury-gold/40 transition-all duration-300 pointer-events-none ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          Chat with Mayura Jewellers
        </span>

        {/* Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Chat with Mayura Jewellers on WhatsApp"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />

          <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366] relative z-10" />
        </a>
      </div>
    </aside>
  );
}

