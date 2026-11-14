"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { GalleryItem } from "@/data/gallery";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  const enquiryUrl = getWhatsAppUrl({
    type: "product",
    productName: currentItem.title,
  });

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container - stopPropagation so clicking inside doesn't close */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-luxury-charcoal rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl border border-luxury-gold/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/60 text-white hover:text-luxury-gold hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-luxury-gold"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          type="button"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/60 text-white hover:text-luxury-gold hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-luxury-gold"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 md:right-[320px] p-2.5 rounded-full bg-black/60 text-white hover:text-luxury-gold hover:bg-black/80 transition-colors focus:outline-none focus:ring-2 focus:ring-luxury-gold"
          aria-label="Next Image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Left Side: Large Image */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[460px] max-h-[70vh] md:max-h-[85vh] bg-neutral-950 flex items-center justify-center">
          <Image
            src={currentItem.image}
            alt={currentItem.alt}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Right Side: Metadata & Enquiry */}
        <div className="w-full md:w-[320px] p-6 bg-[#211F19] text-white flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/10">
          <div>
            <div className="flex items-center justify-between text-xs text-luxury-gold uppercase tracking-widest font-medium mb-2">
              <span>{currentItem.category}</span>
              <span className="text-white/40">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-normal text-white">
              {currentItem.title}
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              {currentItem.description}
            </p>

            {currentItem.isStoreAmbiance && (
              <div className="mt-4 p-3 rounded bg-white/5 border border-white/10 text-xs text-[#D6B878]">
                Boutique highlight from Mayura Jewellers, Kurla West. Visit us to browse our complete collection in person.
              </div>
            )}
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
            <a
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-luxury-gold text-white hover:bg-luxury-goldDark text-xs uppercase tracking-widest font-medium transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="w-full text-center py-2 text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

