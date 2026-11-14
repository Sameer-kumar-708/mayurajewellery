"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section
      id="gallery"
      aria-label="Jewellery & Store Gallery"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-luxury-ivory"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Visual Anthology"
          title="A Glimpse of"
          italicTitle="Elegance"
          subtitle="Explore the artistry of our jewellery creations and the welcoming ambiance of our Kurla boutique."
          align="center"
        />

        {/* Gallery Grid: 4 columns desktop, 2 columns tablet, 1-2 columns mobile */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View enlarged photo: ${item.title}`}
              className="group relative aspect-square w-full overflow-hidden bg-neutral-900 rounded-sm cursor-pointer shadow-subtle border border-luxury-border/60 hover:border-luxury-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Hover Dark Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/90 via-luxury-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[9px] uppercase tracking-widest text-luxury-gold font-medium mb-1">
                  {item.category}
                </span>
                <p className="font-serif text-sm sm:text-base font-normal leading-snug">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/70">
                  <Maximize2 className="w-3 h-3 text-luxury-gold" />
                  <span>Enlarge Preview</span>
                </div>
              </div>

              {/* In-store Ambiance Pill */}
              {item.isStoreAmbiance && (
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="px-2 py-0.5 text-[8px] uppercase tracking-wider bg-luxury-charcoal/80 backdrop-blur-sm text-[#D6B878] rounded-full border border-luxury-gold/30">
                    Boutique
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Note regarding store photography */}
        <div className="mt-8 text-center text-xs text-luxury-muted flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
          <span>Click any image to enlarge and enquire directly with our store team.</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={galleryItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}

