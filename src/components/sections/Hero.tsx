"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero() {
  const whatsappUrl = getWhatsAppUrl({ type: "general" });

  return (
    <section
      id="hero"
      aria-label="Welcome to Mayura Jewellers"
      className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden bg-luxury-charcoal scroll-mt-20"
    >
      {/* Authentic Traditional Indian Gold & Heritage Jewellery Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1611591475806-53867c427382?q=85&w=2000&auto=format&fit=crop"
          alt="Traditional Indian Gold Jewellery and Bridal Ornaments at Mayura Jewellers, Kurla West"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />

        {/* Guaranteed dark luxury gradient overlays for crisp readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(25, 23, 18, 0.78) 0%, rgba(31, 30, 25, 0.72) 45%, rgba(41, 39, 32, 0.95) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(20, 19, 15, 0.85) 100%)",
          }}
        />
      </div>

      {/* Decorative hairline gold frame inside Hero */}
      <div className="absolute inset-4 sm:inset-8 border border-luxury-gold/20 pointer-events-none z-10 hidden sm:block" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-8 py-20 text-center text-white">
        {/* Editorial Sub-header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-luxury-gold/50 text-[#D6B878] text-[11px] sm:text-xs uppercase tracking-widest font-medium mb-6 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          <span>Haute Joaillerie • Kurla West, Mumbai</span>
        </div>

        {/* Main Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[1.1] mb-6 drop-shadow-lg">
          Jewellery That Tells{" "}
          <span className="italic font-light text-luxury-gold block sm:inline">
            Your Story.
          </span>
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 tracking-wide drop-shadow-md">
          Discover timeless elegance and handcrafted Indian gold, diamond, and bridal
          jewellery collections made to celebrate your most precious moments, weddings,
          and festive traditions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <a
            href="#collections"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-luxury-gold text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-luxury-goldDark transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            Explore Collection
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-black/40 border border-white/60 text-white text-xs uppercase tracking-[0.2em] font-medium hover:border-luxury-gold hover:text-luxury-gold transition-all duration-300 backdrop-blur-sm"
          >
            Our Story
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-luxury-gold/20 hover:bg-luxury-gold/30 text-[#D6B878] border border-luxury-gold/60 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-luxury-gold" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Location Subtext */}
        <p className="mt-12 text-xs sm:text-sm text-white/70 tracking-widest uppercase drop-shadow-sm">
          42, Premier Road, Opp. Premier Gate No. 6, Kurla West, Mumbai
        </p>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#intro"
        aria-label="Scroll down to brand introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-luxury-gold transition-colors p-2 flex flex-col items-center gap-1"
      >
        <span className="text-[9px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
