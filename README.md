# Mayura Jewellers — Luxury Boutique Jewellery Website

A website designed and developed for **Mayura Jewellers**, located on Premier Road, Kurla West, Mumbai, Maharashtra, India.

---

## 💎 Project Overview

This website serves as a digital brand experience and client presentation for Mayura Jewellers. It reflects the warmth and heritage of a fine Indian boutique jeweller, prioritizing craftsmanship, bridal grandeur, and direct customer engagement via WhatsApp.

### 🌟 Key Highlights

- **Luxury Brand Aesthetics**: Custom color scheme featuring Warm Ivory (`#FAF8F3`), Soft Beige (`#F0EBE2`), Champagne Antique Gold (`#B99A5B`), and Deep Charcoal (`#292720`).
- **High-Impact Typography**: Editorial serif headings paired with clean modern sans-serif body typography.
- **WhatsApp-First Conversion**: Every category, featured piece, and consultation button connects directly to WhatsApp with pre-filled, URL-encoded inquiry messages (e.g. including product names).
- **Interactive Visual Gallery**: Responsive masonry-style grid with an interactive modal Lightbox supporting keyboard navigation (Escape, Left/Right arrow keys) and direct WhatsApp inquiries.
- **Physical Store Discovery**: Prominently highlights the boutique's location opposite Premier Gate No. 6 on Premier Road in Kurla West, complete with Google Maps embed and one-click directions.
- **Client-Configurable Architecture**: All business details (address, phone numbers, WhatsApp digits, store hours, Google Maps link, and social profiles) are centralized in one single configuration file (`src/config/site.ts`).
- **Ethical Business Accuracy**: Strictly avoids invented founding years, simulated reviews, or fictitious hallmark and price claims.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict mode)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS smooth transitions
- **Images**: Next.js Image component with Unsplash remote patterns

---

## 📂 Project Architecture

```
src/
├── app/
│   ├── globals.css              # Global styles, fonts, and luxury color variables
│   ├── layout.tsx               # Root layout, SEO metadata & OpenGraph tags
│   ├── page.tsx                 # Composed single-page boutique experience
│   └── icon.svg                 # Brand jewel favicon
├── components/
│   ├── layout/
│   │   ├── AnnouncementBar.tsx  # Top slim announcement strip
│   │   ├── Navbar.tsx           # Sticky brand navbar with mobile drawer
│   │   └── Footer.tsx           # Luxury charcoal 4-column footer
│   ├── sections/
│   │   ├── Hero.tsx             # Editorial landing hero section
│   │   ├── BrandIntro.tsx       # Core brand philosophy & story
│   │   ├── About.tsx            # Boutique story & Premier Road presence
│   │   ├── Categories.tsx       # Signature collections (Gold, Diamond, Bridal, etc.)
│   │   ├── FeaturedProducts.tsx # Curated pieces with live filter & WhatsApp links
│   │   ├── WhyChooseUs.tsx      # 4 core pillars of trust & personal assistance
│   │   ├── EditorialBanner.tsx  # Emotional bridal & celebration banner
│   │   ├── Gallery.tsx          # Jewellery & boutique ambiance gallery
│   │   ├── BrandExperience.tsx  # Bespoke appointments & consultation
│   │   └── Contact.tsx          # Store locator, hours, map embed & directions
│   └── ui/
│       ├── SectionHeading.tsx   # Reusable luxury heading with gold dividers
│       ├── CategoryCard.tsx     # Image card with hover animations & enquiry action
│       ├── ProductCard.tsx      # Showcase card with style badges & product enquiry
│       ├── Lightbox.tsx         # Accessible gallery modal with keyboard controls
│       └── WhatsAppFloatingButton.tsx # Fixed floating WhatsApp contact trigger
├── config/
│   └── site.ts                  # Centralized business information & SEO config
├── data/
│   ├── categories.ts            # Jewellery categories data
│   ├── products.ts              # Featured jewellery demo collection
│   └── gallery.ts               # Visual anthology and store showcase items
└── lib/
    └── whatsapp.ts              # Centralized WhatsApp URL generator & message templates
```

---

## ⚙️ How to Update Client Information

All store information is centralized in [`src/config/site.ts`](file:///c:/Users/samee/Desktop/Mayura%20Jewellers/src/config/site.ts).

To update the WhatsApp number or store phone when provided by the owner:

```typescript
// src/config/site.ts
contact: {
  phone: {
    display: "+91 98XXX XXXXX",       // Change to real phone number
    value: "+919800000000",
  },
  whatsapp: {
    display: "+91 98XXX XXXXX",
    number: "919876543210",          // Change to owner's WhatsApp number (country code + digits)
  },
  hours: {
    display: "Monday – Sunday: 11:00 AM – 9:00 PM", // Confirm exact timings
  },
  social: {
    instagram: "https://instagram.com/mayurajewellers", // Official Instagram URL
  }
}
```

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
The production build compiles cleanly into optimized static HTML with zero TypeScript or linting errors.

