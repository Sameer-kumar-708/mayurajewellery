import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export const viewport: Viewport = {
  themeColor: "#292720",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mayurajewellers.com"),
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mayurajewellers.com",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Mayura Jewellers — Luxury Jewellery in Kurla West, Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-luxury-ivory text-luxury-charcoal selection:bg-luxury-gold selection:text-white">
        {/* Top Slim Announcement Bar */}
        <AnnouncementBar />

        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">{children}</main>

        {/* Luxury Dark Charcoal Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

