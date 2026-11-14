export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  isStoreAmbiance?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Bridal Splendor Set",
    category: "Bridal Ornaments",
    image:
      "https://images.unsplash.com/photo-1611591475806-53867c427382?q=80&w=1200&auto=format&fit=crop",
    alt: "Handcrafted traditional bridal gold necklace set",
    description: "Opulent bridal choker set crafted for festive celebration and wedding grandeur.",
  },
  {
    id: "gallery-2",
    title: "Curated Store Counter Ambiance",
    category: "Boutique Experience",
    image:
      "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=1200&auto=format&fit=crop",
    alt: "Warm luxury jewellery boutique presentation showcase",
    description: "Visit our Kurla West boutique for a welcoming, personalized jewellery consultation.",
    isStoreAmbiance: true,
  },
  {
    id: "gallery-3",
    title: "Filigree Gold Jhumkas",
    category: "Earrings",
    image:
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
    alt: "Intricate Indian gold jhumka earrings",
    description: "Artistic gold earrings featuring delicate drops and traditional micro-filigree.",
  },
  {
    id: "gallery-4",
    title: "Diamond Solitaire Radiance",
    category: "Diamond Collection",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
    alt: "Diamond solitaire ring with fine prong setting",
    description: "Hand-selected brilliant cut diamonds fashioned for unforgettable proposals and milestones.",
  },
  {
    id: "gallery-5",
    title: "Boutique Showcase Display",
    category: "In-Store Showcase",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop",
    alt: "Illuminated jewellery boutique velvet display trays",
    description: "Experience our collection firsthand under warm boutique lighting in Kurla West.",
    isStoreAmbiance: true,
  },
  {
    id: "gallery-6",
    title: "Bridal Kadas & Bangles",
    category: "Wristwear",
    image:
      "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
    alt: "Ornate gold kadas on silk cushion",
    description: "Regal gold bangles designed to complement traditional bridal lehengas and sarees.",
  },
  {
    id: "gallery-7",
    title: "Royal Emerald & Diamond Choker",
    category: "Occasion Wear",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop",
    alt: "Luxury gemstone and diamond festive necklace",
    description: "A symphony of luminous stones and fine metalwork for evening celebrations.",
  },
  {
    id: "gallery-8",
    title: "Traditional Heritage Rani Haar",
    category: "Gold Neckwear",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1200&auto=format&fit=crop",
    alt: "Long traditional Indian gold necklace",
    description: "Grand traditional necklace reflecting time-honored Indian jewellery heritage.",
  },
];
