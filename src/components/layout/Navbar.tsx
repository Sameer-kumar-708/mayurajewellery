"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  MessageCircle,
  Gem,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Featured Pieces", href: "#featured" },
  { label: "Visual Gallery", href: "#gallery" },
  { label: "Store & Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);
  const whatsappEnquiryUrl = getWhatsAppUrl({ type: "general" });

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-[#FAF8F3] shadow-sm border-b border-luxury-border py-3"
          : "bg-[#FAF8F3] border-b border-luxury-border/60 py-4 sm:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="#hero"
              onClick={closeMenu}
              className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-luxury-gold/60 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                  <Gem className="w-3.5 h-3.5" />
                </span>
                <span className="font-serif tracking-widestLuxury text-lg sm:text-2xl font-bold uppercase text-luxury-charcoal">
                  MAYURA
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-luxury-muted pl-8 group-hover:text-luxury-gold transition-colors duration-300">
                JEWELLERS • MUMBAI
              </span>
            </Link>

            {/* Desktop Center Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center space-x-8 lg:space-x-10"
            >
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs lg:text-sm uppercase tracking-widest text-luxury-charcoal/80 hover:text-luxury-gold font-medium transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-luxury-gold hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-luxury-gold text-luxury-charcoal bg-white/70 hover:bg-luxury-gold hover:text-white text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Enquire on WhatsApp with Mayura Jewellers"
              >
                <MessageCircle className="w-3.5 h-3.5 text-luxury-gold group-hover:text-white" />
                <span>Enquire Now</span>
              </a>
            </div>

            {/* Mobile Actions: WhatsApp Icon + Hamburger Button */}
            < div className="flex md:hidden items-center gap-2" >
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-white transition-colors"
                aria-label="WhatsApp Enquiry"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-md border border-luxury-border text-luxury-charcoal hover:text-luxury-gold hover:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                aria-expanded={mobileMenuOpen}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN 100% SOLID OPAQUE MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 bg-[#FAF8F3] text-luxury-charcoal flex flex-col md:hidden animate-in fade-in duration-200"
        >
          {/* Top Header inside Drawer */}
          <div className="px-5 py-4 border-b border-luxury-border flex items-center justify-between bg-[#FAF8F3]">
            <Link
              href="#hero"
              onClick={closeMenu}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold">
                  <Gem className="w-3.5 h-3.5" />
                </span>
                <span className="font-serif tracking-widestLuxury text-xl font-bold uppercase text-luxury-charcoal">
                  MAYURA
                </span>
              </div>
              <span className="text-[9px] tracking-[0.25em] uppercase text-luxury-muted pl-8">
                JEWELLERS • MUMBAI
              </span>
            </Link>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-full border border-luxury-border bg-white text-luxury-charcoal hover:text-luxury-gold hover:border-luxury-gold transition-colors focus:outline-none focus:ring-2 focus:ring-luxury-gold"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Navigation Body */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between space-y-6 bg-[#FAF8F3]">
            {/* Nav Links */}
            <nav className="flex flex-col space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold mb-2 block">
                Menu Navigation
              </span>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-3.5 text-lg font-serif text-luxury-charcoal hover:text-luxury-gold border-b border-luxury-border/60 transition-colors group"
                >
                  <span className="tracking-wide group-hover:translate-x-1 transition-transform">
                    {item.label}
                  </span>
                  <ChevronRight className="w-4 h-4 text-luxury-gold/60 group-hover:text-luxury-gold group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </nav>

            {/* Actions & CTAs */}
            <div className="space-y-3 pt-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold block mb-1">
                Direct Contact
              </span>

              {/* WhatsApp Button */}
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-luxury-gold text-white text-xs uppercase tracking-widest font-semibold hover:bg-luxury-goldDark shadow-md transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>

              {/* Call Store Button */}
              <a
                href={`tel:${siteConfig.contact.phone.value}`}
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-luxury-border bg-white text-luxury-charcoal hover:border-luxury-gold hover:text-luxury-gold text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Call Store ({siteConfig.contact.phone.display})</span>
              </a>

              {/* Get Directions Link */}
              <a
                href={siteConfig.contact.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-luxury-muted hover:text-luxury-charcoal uppercase tracking-wider"
              >
                <Navigation className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Get Directions to Store</span>
              </a>
            </div>

            {/* Bottom Store Details Card */}
            <div className="p-4 rounded-sm bg-luxury-beige border border-luxury-border text-xs text-luxury-charcoal space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                <span className="font-light leading-snug">
                  42, Premier Road, Opp. Premier Gate No. 6, Kurla West, Mumbai - 400070
                </span>
              </div>
              <div className="flex items-center gap-2 text-luxury-muted pt-1 border-t border-luxury-border/50">
                <Clock className="w-3 h-3 text-luxury-gold shrink-0" />
                <span className="text-[11px]">{siteConfig.contact.hours.display}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
