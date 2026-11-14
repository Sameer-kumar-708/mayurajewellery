import React from "react";
import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Categories() {
  return (
    <section
      id="collections"
      aria-label="Jewellery Categories"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-ivory"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Our Signature Offerings"
          title="Discover Our"
          italicTitle="Collections"
          subtitle="A beautiful selection crafted for every style, milestone, and festive celebration."
          align="center"
        />

        {/* Categories Grid: 3 columns desktop, 2 columns tablet, 1-2 columns mobile */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              category={category}
              priority={index < 3}
            />
          ))}
        </div>

        {/* Bottom helper note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-luxury-muted font-light tracking-wide">
            Looking for a custom design or specific gemstone setting?{" "}
            <a
              href="#contact"
              className="text-luxury-gold underline hover:text-luxury-charcoal transition-colors ml-1"
            >
              Contact our Kurla West team for a bespoke consultation.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

