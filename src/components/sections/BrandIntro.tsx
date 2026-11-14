import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandIntro() {
  return (
    <section
      id="intro"
      aria-label="Brand Philosophy"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-ivory"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          label="Welcome to Mayura Jewellers"
          title="Every Piece Has a Story."
          italicTitle="Make Yours Unforgettable."
          align="center"
        />

        <div className="mt-8 space-y-5 text-sm sm:text-base lg:text-lg text-luxury-muted font-light leading-relaxed max-w-3xl mx-auto">
          <p>
            At Mayura Jewellers, jewellery is more than an accessory—it is an
            expression of tradition, emotion, and life’s most cherished celebrations.
            From auspicious family occasions to everyday grace, our designs are curated
            to reflect timeless sophistication.
          </p>
          <p className="text-xs sm:text-sm text-luxury-muted/80 tracking-wide uppercase">
            Specializing in Gold Jewellery • Diamond Creations • Bespoke Bridal Ensembles
          </p>
        </div>

        {/* Brand values pills */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-luxury-border/60">
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-luxury-charcoal font-medium">
              Curated
            </div>
            <div className="text-[11px] uppercase tracking-widest text-luxury-muted mt-1">
              Hand-Selected Designs
            </div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-luxury-charcoal font-medium">
              Bespoke
            </div>
            <div className="text-[11px] uppercase tracking-widest text-luxury-muted mt-1">
              Personalized Guidance
            </div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-luxury-charcoal font-medium">
              Bridal
            </div>
            <div className="text-[11px] uppercase tracking-widest text-luxury-muted mt-1">
              Wedding Sets & Trousseaus
            </div>
          </div>
          <div>
            <div className="font-serif text-2xl sm:text-3xl text-luxury-charcoal font-medium">
              Kurla West
            </div>
            <div className="text-[11px] uppercase tracking-widest text-luxury-muted mt-1">
              Premier Road Boutique
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

