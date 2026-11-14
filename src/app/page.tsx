import React from "react";
import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { About } from "@/components/sections/About";
import { Categories } from "@/components/sections/Categories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { EditorialBanner } from "@/components/sections/EditorialBanner";
import { Gallery } from "@/components/sections/Gallery";
import { BrandExperience } from "@/components/sections/BrandExperience";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Hero / Landing Section */}
      <Hero />

      {/* 2. Brand Introduction */}
      <BrandIntro />

      {/* 3. About Mayura Jewellers */}
      <About />

      {/* 4. Jewellery Categories */}
      <Categories />

      {/* 5. Featured Pieces Showcase */}
      <FeaturedProducts />

      {/* 6. Why Choose Mayura */}
      <WhyChooseUs />

      {/* 7. Editorial / Storytelling Banner */}
      <EditorialBanner />

      {/* 8. Visual Gallery & Ambiance */}
      <Gallery />

      {/* 9. Boutique Experience & Consultation */}
      <BrandExperience />

      {/* 10. Store Location, Map & Inquiries */}
      <Contact />
    </>
  );
}

