"use client";

import React from "react";
import Image from "next/image";
import { MapPin, ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function About() {
  const whatsappUrl = getWhatsAppUrl({ type: "store_visit" });

  return (
    <section
      id="about"
      aria-label="About Mayura Jewellers"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-beige/60 border-y border-luxury-border/60"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full max-w-lg mx-auto rounded-sm overflow-hidden shadow-card border border-luxury-border">
              <Image
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop"
                alt="Mayura Jewellers Bridal Collection Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Decorative gold border frame */}
              <div className="absolute inset-4 border border-white/30 pointer-events-none" />

              {/* Floating boutique identity badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-sm bg-luxury-charcoal/95 backdrop-blur-md text-white border border-luxury-gold/40 shadow-xl">
                <div className="flex items-center gap-2 text-luxury-gold text-xs uppercase tracking-widest font-medium mb-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Kurla West Boutique</span>
                </div>
                <p className="text-xs text-white/90 font-light">
                  42, Premier Road, Opp. Premier Gate No. 6, Mumbai - 400070
                </p>
              </div>
            </div>

            {/* Subtle decorative gold badge in top corner */}
            <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white rounded-full border border-luxury-gold shadow-md text-xs font-serif text-luxury-charcoal">
              <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Timeless Elegance</span>
            </div>
          </div>

          {/* Right Column: Editorial Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-luxury-gold" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-luxury-gold">
                OUR STORY & PROMISE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-luxury-charcoal leading-tight">
              Beauty in Every Detail.{" "}
              <span className="italic font-light text-luxury-gold block">
                Crafted for Generations.
              </span>
            </h2>

            {/* Content paragraphs */}
            <div className="mt-6 space-y-4 text-sm sm:text-base text-luxury-muted leading-relaxed font-light">
              <p>
                Nestled along Premier Road in Kurla West, Mayura Jewellers is dedicated
                to presenting curated collections that blend time-honored Indian traditions
                with clean, contemporary aesthetics. We believe that fine jewellery is an
                intimate heirloom—meant to accompany brides down the aisle, commemorate
                anniversaries, and sparkle with everyday pride.
              </p>
              <p>
                Whether you seek an ornate gold bridal necklace, radiant diamond ornaments,
                or a delicate daily accent, our boutique offers a warm, personal shopping
                experience with dedicated attention to your taste and occasion.
              </p>
            </div>

            {/* Store Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-luxury-border/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0 text-luxury-gold mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-luxury-charcoal">
                    Personalized Attention
                  </h3>
                  <p className="text-xs text-luxury-muted mt-0.5">
                    Consultative, warm guidance for your bridal & celebration needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0 text-luxury-gold mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-luxury-charcoal">
                    Convenient Location
                  </h3>
                  <p className="text-xs text-luxury-muted mt-0.5">
                    Easily accessible opposite Premier Gate No. 6 in Kurla West.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-luxury-charcoal text-white text-xs uppercase tracking-widest font-medium hover:bg-luxury-gold transition-colors duration-300 shadow-sm"
              >
                <span>Visit Our Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-luxury-gold text-luxury-charcoal hover:bg-luxury-gold hover:text-white text-xs uppercase tracking-widest font-medium transition-all duration-300"
              >
                <span>Plan A Visit On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

