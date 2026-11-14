"use client";

import React, { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const FILTER_TAGS = ["All Pieces", "Bridal Collection", "Gold Jewellery", "Diamond Jewellery", "Earrings", "Bangles"];

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All Pieces");

  const filteredProducts =
    activeFilter === "All Pieces"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const customCatalogueUrl = getWhatsAppUrl({
    customMessage:
      "Hello Mayura Jewellers, I am interested in viewing your complete featured jewellery catalog and latest arrivals.",
  });

  return (
    <section
      id="featured"
      aria-label="Featured Jewellery Collection"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-beige/40 border-t border-luxury-border/60"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Curated Showcase"
          title="Featured"
          italicTitle="Pieces"
          subtitle="A handpicked glimpse of our most admired heritage sets, diamond creations, and festive ornaments."
          align="center"
        />

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "bg-luxury-charcoal text-white shadow-sm"
                  : "bg-white/80 text-luxury-muted hover:text-luxury-charcoal hover:bg-white border border-luxury-border"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Product Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < 3}
            />
          ))}
        </div>

        {/* Note & Full Catalog WhatsApp Action */}
        <div className="mt-16 p-6 sm:p-8 rounded-sm bg-white border border-luxury-border max-w-3xl mx-auto text-center shadow-subtle">
          <div className="inline-flex items-center gap-1.5 text-luxury-gold text-xs uppercase tracking-widest font-medium mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Portfolio Preview</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-luxury-charcoal">
            Looking for a specific ornament or weight requirement?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-luxury-muted max-w-xl mx-auto leading-relaxed">
            Our boutique collection in Kurla West extends far beyond our digital showcase. Connect with our store team directly on WhatsApp for real-time video consultations or catalog pictures.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={customCatalogueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-luxury-charcoal text-white hover:bg-luxury-gold text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-luxury-gold" />
              <span>Request Full Store Catalogue</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

