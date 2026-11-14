"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import { Product } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const whatsappUrl = getWhatsAppUrl({
    type: "product",
    productName: product.name,
  });

  return (
    <div className="group relative bg-white border border-luxury-border rounded-sm overflow-hidden flex flex-col justify-between hover:border-luxury-gold/60 transition-all duration-300 hover:shadow-card">
      <div>
        {/* Product Photograph Container */}
        <div className="relative aspect-square w-full overflow-hidden bg-luxury-beige/30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Style Tag */}
          {product.styleTag && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[9px] uppercase tracking-widest font-medium bg-luxury-charcoal/90 backdrop-blur-sm text-[#D6B878] rounded-full border border-luxury-gold/30">
                <Sparkles className="w-2.5 h-2.5" />
                {product.styleTag}
              </span>
            </div>
          )}

          {/* Quick Enquire Hover Banner */}
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
            <span className="text-[11px] text-white tracking-widest uppercase font-medium">
              Click to enquire on WhatsApp
            </span>
          </div>
        </div>

        {/* Product Details */}
        <div className="p-5">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-luxury-muted mb-1.5 font-medium">
            <span>{product.category}</span>
            {product.metalDetail && (
              <span className="text-luxury-gold text-[10px]">{product.metalDetail}</span>
            )}
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-normal text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-200">
            {product.name}
          </h3>

          <p className="mt-2 text-xs text-luxury-muted line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>

          <p className="mt-2.5 text-[10px] uppercase tracking-wider text-neutral-400 italic">
            *Representative sample design • Enquire for current availability
          </p>
        </div>
      </div>

      {/* Card Action */}
      <div className="p-5 pt-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-luxury-ivory hover:bg-luxury-gold text-luxury-charcoal hover:text-white border border-luxury-border hover:border-luxury-gold text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm"
          aria-label={`Enquire about ${product.name} on WhatsApp`}
        >
          <MessageCircle className="w-3.5 h-3.5 text-luxury-gold group-hover:text-white transition-colors" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

