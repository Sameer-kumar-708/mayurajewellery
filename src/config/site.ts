export interface SiteConfig {
  name: string;
  tagline: string;
  category: string;
  description: string;
  contact: {
    address: {
      line1: string;
      landmark: string;
      locality: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      full: string;
    };
    phone: {
      display: string;
      value: string;
      isPlaceholder: boolean;
    };
    whatsapp: {
      display: string;
      number: string; // international digits without + for wa.me
      isPlaceholder: boolean;
    };
    email: {
      display: string;
      value: string;
      isPlaceholder: boolean;
    };
    hours: {
      display: string;
      note: string;
      isPlaceholder: boolean;
    };
    social: {
      instagram: string;
      facebook?: string;
      isPlaceholder: boolean;
    };
    maps: {
      embedUrl: string;
      directionsUrl: string;
      note: string;
    };
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Mayura Jewellers",
  tagline: "Jewellery That Tells Your Story",
  category: "Jewellery Store",
  description:
    "Explore elegant jewellery collections at Mayura Jewellers, located in Kurla West, Mumbai. Visit our boutique or enquire through WhatsApp for bespoke gold, diamond, and bridal jewellery.",
  contact: {
    address: {
      line1: "42, Premier Road",
      landmark: "Opp. Premier Gate No. 6, Nawpada",
      locality: "Kurla West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400070",
      country: "India",
      full: "42, Premier Road, Opp. Premier Gate No. 6, Nawpada, Kurla West, Mumbai, Maharashtra - 400070, India",
    },
    phone: {
      display: "+91 74087 04537",
      value: "+917408704537",
      isPlaceholder: true,
    },
    whatsapp: {
      display: "+91 74087 04537",
      number: "7408704537", // Placeholder WhatsApp number for wa.me link
      isPlaceholder: true,
    },
    email: {
      display: "contact@mayurajewellers.com (Placeholder)",
      value: "contact@mayurajewellers.com",
      isPlaceholder: true,
    },
    hours: {
      display: "Monday – Sunday: 11:00 AM – 9:00 PM",
      note: "Store hours placeholder — please confirm with store management",
      isPlaceholder: true,
    },
    social: {
      instagram: "https://instagram.com/mayurajewellers",
      isPlaceholder: true,
    },
    maps: {
      // Clean Google Maps search embed for 42 Premier Road Opp Premier Gate No 6 Kurla West Mumbai 400070
      embedUrl:
        "https://www.google.com/maps?q=42,+Premier+Road,+Opp.+Premier+Gate+No.+6,+Nawpada,+Kurla+West,+Mumbai+400070&output=embed",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=42,+Premier+Road,+Opp.+Premier+Gate+No.+6,+Nawpada,+Kurla+West,+Mumbai+400070",
      note: "Map pin based on provided postal address. Store owner should verify exact entrance pin.",
    },
  },
  seo: {
    title: "Mayura Jewellers | Timeless Elegance in Kurla, Mumbai",
    description:
      "Explore elegant jewellery collections at Mayura Jewellers, located in Kurla West, Mumbai. Visit our store or enquire through WhatsApp for gold, diamond, and bridal jewellery.",
    keywords: [
      "Mayura Jewellers",
      "Jewellery store Kurla West",
      "Gold jewellery Mumbai",
      "Diamond jewellery Kurla",
      "Bridal jewellery Mumbai",
      "Premier Road Kurla jewellers",
      "Indian bridal jewellery",
    ],
    ogImage: "/images/hero-jewellery.jpg",
  },
};

