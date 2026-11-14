import React from "react";
import { MessageCircle, Heart, Award, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Client reviews toggle: keep false until owner provides verified Google reviews/testimonials
export const SHOW_CUSTOMER_TESTIMONIALS = false;

export function BrandExperience() {
  const whatsappUrl = getWhatsAppUrl({
    customMessage:
      "Hello Mayura Jewellers, I would like to book a personalized jewellery viewing appointment at your Kurla store.",
  });

  return (
    <section
      aria-label="The Mayura Boutique Experience"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-luxury-beige/30 border-y border-luxury-border/60"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Client Commitment"
          title="The Boutique"
          italicTitle="Experience"
          subtitle="Every visit to Mayura Jewellers is designed to be an unhurried, memorable journey in fine jewellery discovery."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white border border-luxury-border rounded-sm text-center flex flex-col items-center shadow-subtle hover:border-luxury-gold/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold mb-5">
              <Sparkles className="w-5 h-5 stroke-[1.25]" />
            </div>
            <h3 className="font-serif text-xl font-normal text-luxury-charcoal">
              Private Viewing & Guidance
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-luxury-muted leading-relaxed font-light">
              Sit down with our experienced team for a relaxed consultation tailored to your preferences, budget, and ceremonial timings.
            </p>
          </div>

          <div className="p-8 bg-white border border-luxury-border rounded-sm text-center flex flex-col items-center shadow-subtle hover:border-luxury-gold/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold mb-5">
              <Award className="w-5 h-5 stroke-[1.25]" />
            </div>
            <h3 className="font-serif text-xl font-normal text-luxury-charcoal">
              Custom Sizing & Adjustments
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-luxury-muted leading-relaxed font-light">
              We ensure your rings, necklaces, and bangles drape with impeccable comfort, tailored to your exact measurements.
            </p>
          </div>

          <div className="p-8 bg-white border border-luxury-border rounded-sm text-center flex flex-col items-center shadow-subtle hover:border-luxury-gold/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold mb-5">
              <Heart className="w-5 h-5 stroke-[1.25]" />
            </div>
            <h3 className="font-serif text-xl font-normal text-luxury-charcoal">
              Auspicious Occasion Planning
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-luxury-muted leading-relaxed font-light">
              Whether preparing for Dhanteras, Akshaya Tritiya, or a wedding trousseau, we help you pick ornaments worthy of sacred moments.
            </p>
          </div>
        </div>

        {/* Appointment CTA */}
        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-luxury-charcoal hover:bg-luxury-gold text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-luxury-gold" />
            <span>Book A Boutique Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
}

