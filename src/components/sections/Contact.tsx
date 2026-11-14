"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Navigation,
  Sparkles,
  Send,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [customQuery, setCustomQuery] = useState("");
  const storeVisitUrl = getWhatsAppUrl({ type: "store_visit" });

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;
    const url = getWhatsAppUrl({
      customMessage: `Hello Mayura Jewellers, I have an enquiry: ${customQuery.trim()}`,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Location"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-ivory"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Store Locator & Inquiries"
          title="Visit Our"
          italicTitle="Store"
          subtitle="Looking for something special? Visit Mayura Jewellers and explore our collections in person in Kurla West."
          align="center"
        />

        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Store Details & Fast WhatsApp Enquiry */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-white border border-luxury-border shadow-subtle">
              <h3 className="font-serif text-2xl font-normal text-luxury-charcoal mb-6 flex items-center gap-2">
                <span>Mayura Jewellers</span>
                <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold inline-block" />
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-muted font-medium block">
                      Address & Landmark
                    </span>
                    <p className="text-sm font-medium text-luxury-charcoal mt-1 leading-snug">
                      {siteConfig.contact.address.line1}
                    </p>
                    <p className="text-xs text-luxury-muted mt-0.5">
                      {siteConfig.contact.address.landmark}
                    </p>
                    <p className="text-xs text-luxury-muted mt-0.5">
                      {siteConfig.contact.address.locality},{" "}
                      {siteConfig.contact.address.city} – {siteConfig.contact.address.pincode}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pt-4 border-t border-luxury-border/50">
                  <div className="w-10 h-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-muted font-medium block">
                      Direct Store Contact
                    </span>
                    <p className="text-sm font-medium text-luxury-charcoal mt-1">
                      {siteConfig.contact.phone.display}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      (Store contact number placeholder — update upon owner confirmation)
                    </p>
                  </div>
                </div>

                {/* Store Hours */}
                <div className="flex items-start gap-4 pt-4 border-t border-luxury-border/50">
                  <div className="w-10 h-10 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-muted font-medium block">
                      Opening Hours
                    </span>
                    <p className="text-sm font-medium text-luxury-charcoal mt-1">
                      {siteConfig.contact.hours.display}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {siteConfig.contact.hours.note}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-luxury-border flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.contact.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-luxury-charcoal text-white hover:bg-luxury-gold text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-luxury-gold" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={storeVisitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm border border-luxury-gold text-luxury-charcoal hover:bg-luxury-gold hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-luxury-gold group-hover:text-white" />
                  <span>Enquire Store Visit</span>
                </a>
              </div>
            </div>

            {/* Quick Instant WhatsApp Message Form */}
            <div className="p-6 rounded-sm bg-luxury-beige/50 border border-luxury-border">
              <div className="flex items-center gap-2 text-luxury-charcoal font-serif text-base mb-1">
                <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Instant Inquiry via WhatsApp</span>
              </div>
              <p className="text-xs text-luxury-muted mb-4">
                Type your question below to start a direct chat with our Kurla West team:
              </p>

              <form onSubmit={handleCustomSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={customQuery}
                  onChange={(e) => setCustomQuery(e.target.value)}
                  placeholder="e.g. Do you have bridal necklace sets available?"
                  className="flex-1 px-3.5 py-2.5 text-xs bg-white border border-luxury-border rounded-sm text-luxury-charcoal placeholder:text-neutral-400 focus:outline-none focus:border-luxury-gold"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-luxury-gold hover:bg-luxury-goldDark text-white rounded-sm text-xs uppercase tracking-wider font-medium flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Send</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Google Maps Embed with Map Directions Preview */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-full min-h-[420px] rounded-sm overflow-hidden border border-luxury-border shadow-card bg-neutral-100">
              <iframe
                title="Mayura Jewellers Location Map"
                src={siteConfig.contact.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Map Overlay Badge */}
              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm p-3 rounded-sm shadow-md border border-luxury-border max-w-xs hidden sm:block">
                <p className="text-xs font-semibold text-luxury-charcoal">
                  Mayura Jewellers
                </p>
                <p className="text-[11px] text-luxury-muted mt-0.5">
                  Opposite Premier Gate No. 6, Premier Road, Kurla West
                </p>
                <a
                  href={siteConfig.contact.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-luxury-gold hover:underline mt-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

            <p className="text-[11px] text-luxury-muted mt-3 italic text-center sm:text-left">
              * Note: {siteConfig.contact.maps.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

