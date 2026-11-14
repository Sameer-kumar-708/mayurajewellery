"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Category } from "@/data/categories";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
}

export function CategoryCard({ category, priority = false }: CategoryCardProps) {
  const whatsappUrl = getWhatsAppUrl({
    type: category.enquiryType,
    categoryName: category.name,
  });

  return (
    <div className="group relative overflow-hidden bg-luxury-charcoal text-white rounded-sm shadow-subtle hover:shadow-card transition-all duration-500 border border-luxury-border/30 hover:border-luxury-gold/50 flex flex-col h-full">
      {/* Category Image with zoom on hover */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-neutral-900">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-luxury-charcoal/40 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300" />

        {/* Optional Tag / Badge */}
        {category.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium bg-luxury-gold text-white rounded-full shadow-sm">
              {category.badge}
            </span>
          </div>
        )}

        {/* Top-Right Quick Enquiry Icon */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm text-luxury-charcoal hover:bg-luxury-gold hover:text-white flex items-center justify-center transition-all shadow-md"
            aria-label={`Enquire about ${category.name} on WhatsApp`}
            title={`Enquire about ${category.name}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative p-5 sm:p-6 bg-gradient-to-b from-[#25231C] to-luxury-charcoal flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gold block mb-1.5 font-medium">
            {category.subtitle}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-luxury-gold transition-colors duration-300">
            {category.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/70 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Enquiry Action Button */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-white/90 hover:text-luxury-gold transition-colors group/link"
          >
            <MessageCircle className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Enquire On WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

