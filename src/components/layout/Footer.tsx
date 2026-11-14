import React from "react";
import Link from "next/link";
import {
  Gem,
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl({ type: "general" });

  const QUICK_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "About Mayura", href: "#about" },
    { label: "Jewellery Collections", href: "#collections" },
    { label: "Featured Pieces", href: "#featured" },
    { label: "Visual Gallery", href: "#gallery" },
    { label: "Store & Contact", href: "#contact" },
  ];

  const CATEGORY_LINKS = [
    { label: "Gold Jewellery", href: "#collections" },
    { label: "Diamond Creations", href: "#collections" },
    { label: "Bridal Collection", href: "#collections" },
    { label: "Earrings & Jhumkas", href: "#collections" },
    { label: "Necklaces & Harams", href: "#collections" },
    { label: "Bangles & Kadas", href: "#collections" },
  ];

  return (
    <footer
      aria-label="Footer"
      className="bg-luxury-charcoal text-white pt-16 sm:pt-20 pb-12 border-t border-[#3B382F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#hero" className="inline-flex flex-col items-start group">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border border-luxury-gold flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-colors">
                  <Gem className="w-4 h-4" />
                </span>
                <span className="font-serif tracking-widestLuxury text-2xl font-bold uppercase text-white">
                  MAYURA
                </span>
              </div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D6B878] pl-9">
                JEWELLERS • MUMBAI
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Discover timeless elegance and handcrafted jewellery collections made to
              celebrate your most precious moments. Located on Premier Road, Kurla West,
              Mumbai.
            </p>

            {/* Social media placeholders */}
            <div className="pt-2">
              <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-medium block mb-2.5">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-luxury-gold hover:border-luxury-gold hover:bg-white/10 transition-colors"
                  aria-label="Mayura Jewellers on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-luxury-gold hover:border-luxury-gold hover:bg-white/10 transition-colors"
                  aria-label="Mayura Jewellers on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
              <p className="text-[10px] text-white/40 mt-2">
                (Official Instagram handle will be updated upon client confirmation)
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D6B878] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-luxury-gold transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Collections (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D6B878] font-semibold">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-light">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-luxury-gold transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Store Visit & Contact (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D6B878] font-semibold">
              Visit Boutique
            </h4>

            <div className="space-y-3 text-xs text-white/75 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span>
                  42, Premier Road, Opp. Premier Gate No. 6, Nawpada, Kurla West,
                  Mumbai, Maharashtra - 400070
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <span>Phone: {siteConfig.contact.phone.display}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-luxury-gold shrink-0" />
                <span>{siteConfig.contact.hours.display}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-luxury-gold hover:bg-luxury-goldDark text-white text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
            <span>
              © {currentYear} {siteConfig.name}. All Rights Reserved. Kurla West,
              Mumbai.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-white/40">
              Frontend Client Demonstration Website
            </span>

            <a
              href="#hero"
              className="inline-flex items-center gap-1.5 text-luxury-gold hover:text-white transition-colors uppercase tracking-widest text-[11px]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

