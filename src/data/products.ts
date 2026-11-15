export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  styleTag?: string;
  metalDetail?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "royal-kundan-necklace",
    name: "Royal Heritage Choker Set",
    category: "Bridal Collection",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop",
    styleTag: "Bridal Exclusive",
    metalDetail: "Traditional Craftsmanship",
    description: "An opulent choker necklace adorned with intricate traditional motifs, perfect for bridal ceremonies.",
  },
  {
    id: "classic-temple-jhumkas",
    name: "Artisan Temple Gold Jhumkas",
    category: "Earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1000&auto=format&fit=crop",
    styleTag: "Bestseller",
    metalDetail: "Heritage Gold Style",
    description: "Handcrafted temple jhumkas featuring delicate filigree and hanging bead accents.",
  },
  {
    id: "solitaire-diamond-ring",
    name: "Brilliant Cut Diamond Band",
    category: "Diamond Jewellery",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1000&auto=format&fit=crop",
    styleTag: "Signature Piece",
    metalDetail: "Sparkling Diamond Accent",
    description: "A timeless diamond engagement ring with a halo of light designed to capture every gaze.",
  },
  {
    id: "carved-peacock-kada",
    name: "Ornate Hand-Carved Gold Kada",
    category: "Bangles",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000&auto=format&fit=crop",
    styleTag: "Artisan Craft",
    metalDetail: "Embossed Antique Finish",
    description: "Solid traditional wrist kada embellished with detailed floral and peacock engraving.",
  },
  {
    id: "emerald-diamond-necklace",
    name: "Lumina Diamond & Gem Choker",
    category: "Diamond Jewellery",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    styleTag: "Luxury Festive",
    metalDetail: "Fine Jewellery Creation",
    description: "A breathtaking cascade of sparkling gemstones and radiant diamond highlights.",
  },
  {
    id: "traditional-gold-necklace",
    name: "Traditional Gold Rani Haar",
    category: "Gold Jewellery",
    image:
      "https://images.unsplash.com/photo-1787769499983-cf60247272c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    styleTag: "Timeless Classic",
    metalDetail: "Celebration Special",
    description: "A royal multi-layered gold necklace that brings unmatched majesty to auspicious celebrations.",
  },
];
