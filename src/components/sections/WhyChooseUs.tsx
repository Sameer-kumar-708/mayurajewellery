import React from "react";
import { Sparkles, HeartHandshake, Gem, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Gem,
    title: "Curated Collections",
    subtitle: "Artistry & Elegance",
    description:
      "A handpicked repertoire ranging from opulent traditional wedding jewellery to light, contemporary daily wear.",
  },
  {
    icon: Shield,
    title: "Commitment to Trust",
    subtitle: "Transparent Relationships",
    description:
      "Built on goodwill in the Kurla West community, prioritizing genuine customer care and honest consultation.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Assistance",
    subtitle: "Dedicated Guidance",
    description:
      "Enjoy attentive, unhurried service to help you select the exact jewellery piece that matches your milestone.",
  },
  {
    icon: Sparkles,
    title: "For Special Moments",
    subtitle: "Celebrations & Milestones",
    description:
      "Celebrate weddings, engagements, festivals, and family anniversaries with ornaments crafted to be treasured.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-label="Why Choose Mayura Jewellers"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-ivory"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="The Mayura Experience"
          title="Why Choose"
          italicTitle="Mayura Jewellers"
          subtitle="Discover a refined shopping atmosphere centered on personal attention and exquisite jewellery design."
          align="center"
        />

        {/* 4-column minimal benefits grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="group relative p-8 bg-white border border-luxury-border rounded-sm hover:border-luxury-gold/50 transition-all duration-300 hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-luxury-beige flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.25]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-luxury-muted block mb-1">
                    {benefit.subtitle}
                  </span>

                  <h3 className="font-serif text-xl font-normal text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-200">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-luxury-muted leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-luxury-border/40">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold/80 font-medium">
                    Premier Road • Kurla West
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

