"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function EditorialBanner() {
  const whatsappUrl = getWhatsAppUrl({ type: "bridal" });

  return (
    <section
      aria-label="Editorial Brand Banner"
      className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden bg-luxury-charcoal text-white"
    >
      {/* Background Editorial Visual */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=85&w=2000&auto=format&fit=crop"
          alt="High Jewellery Craftsmanship"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal via-luxury-charcoal/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B878] font-medium">
              CELEBRATE THE UNFORGETTABLE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight text-white">
            Celebrate the Moments{" "}
            <span className="italic font-light text-luxury-gold block">
              That Matter Most.
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl">
            From the sacred glow of the wedding mandap to milestones that mark your
            journey, our bridal and gold pieces are curated to make every memory
            radiate with brilliance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-luxury-gold text-white text-xs uppercase tracking-widest font-semibold hover:bg-luxury-goldDark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Enquire for Bridal Consultation</span>
            </a>

            <a
              href="#collections"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/40 text-white hover:border-luxury-gold hover:text-luxury-gold text-xs uppercase tracking-widest font-medium transition-colors backdrop-blur-sm"
            >
              <span>View All Collections</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

