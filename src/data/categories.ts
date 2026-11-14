import { WhatsAppEnquiryType } from "@/lib/whatsapp";

export interface Category {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  enquiryType: WhatsAppEnquiryType;
  badge?: string;
  itemCountDemo?: string;
}

export const categories: Category[] = [
  {
    id: "gold-jewellery",
    name: "Gold Jewellery",
    subtitle: "Pure Traditional Artistry",
    description: "Intricately designed traditional & modern 22K gold ornaments crafted for celebratory elegance.",
    image:
      "https://images.unsplash.com/photo-1611591475806-53867c427382?q=80&w=1200&auto=format&fit=crop",
    enquiryType: "gold",
    badge: "Bestseller",
  },
  {
    id: "diamond-jewellery",
    name: "Diamond Jewellery",
    subtitle: "Radiant & Unmatched Sparkle",
    description: "Exquisite diamond neckwear, solitaire rings, and delicate creations cut to perfection.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    enquiryType: "diamond",
    badge: "Signature",
  },
  {
    id: "bridal-collection",
    name: "Bridal Collection",
    subtitle: "For Your Most Sacred Day",
    description: "Opulent wedding sets, chokers, and royal bridal ensembles designed to create lifelong memories.",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    enquiryType: "bridal",
    badge: "Bridal Couture",
  },
  {
    id: "earrings",
    name: "Earrings & Jhumkas",
    subtitle: "Timeless Face-Framing Grace",
    description: "From classic temple jhumkas and chandbalis to contemporary diamond drops.",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
    enquiryType: "category",
  },
  {
    id: "necklaces",
    name: "Necklaces & Harams",
    subtitle: "Statements of Regal Splendor",
    description: "Majestic rani haars, antique temple chokers, and graceful celebration neckwear.",
    image:
      "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0?q=80&w=1200&auto=format&fit=crop",
    enquiryType: "category",
  },
  {
    id: "bangles-kadas",
    name: "Bangles & Kadas",
    subtitle: "Symphony of Graceful Wrists",
    description: "Carved gold kadas, delicate bracelets, and layered bridal bangles with antique finish.",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
    enquiryType: "category",
  },
];
