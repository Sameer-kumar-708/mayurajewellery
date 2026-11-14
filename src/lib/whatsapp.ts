import { siteConfig } from "@/config/site";

export type WhatsAppEnquiryType =
  | "general"
  | "gold"
  | "diamond"
  | "bridal"
  | "product"
  | "category"
  | "store_visit";

export interface WhatsAppOptions {
  type?: WhatsAppEnquiryType;
  productName?: string;
  categoryName?: string;
  customMessage?: string;
}

/**
 * Builds pre-filled, URL-encoded WhatsApp enquiry links for Mayura Jewellers.
 * Keeps business numbers centralized and guarantees consistent customer touchpoints.
 */
export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const { type = "general", productName, categoryName, customMessage } = options;
  const rawNumber = siteConfig.contact.whatsapp.number;
  const digitsOnly = rawNumber.replace(/\D/g, "");
  // If 10 digits entered, automatically add India country code 91
  const phoneNumber = digitsOnly.length === 10 ? `91${digitsOnly}` : digitsOnly;

  let message = "";

  if (customMessage) {
    message = customMessage;
  } else {
    switch (type) {
      case "product":
        message = productName
          ? `Hello Mayura Jewellers, I am interested in your ${productName}. Please share more details and availability.`
          : "Hello Mayura Jewellers, I am interested in one of your featured jewellery pieces. Please share more details.";
        break;

      case "category":
        message = categoryName
          ? `Hello Mayura Jewellers, I am interested in exploring your ${categoryName} collection. Could you please share catalog photos and details?`
          : "Hello Mayura Jewellers, I am interested in your jewellery collection.";
        break;

      case "gold":
        message =
          "Hello Mayura Jewellers, I would like to enquire about your Gold Jewellery collection and current designs.";
        break;

      case "diamond":
        message =
          "Hello Mayura Jewellers, I would like to enquire about your Diamond Jewellery designs and bespoke options.";
        break;

      case "bridal":
        message =
          "Hello Mayura Jewellers, I am looking for Bridal Jewellery sets for an upcoming wedding. Please share your bridal collection.";
        break;

      case "store_visit":
        message =
          "Hello Mayura Jewellers, I would like to plan a visit to your store at Premier Road, Kurla West. Could you please confirm your visiting hours and assist me?";
        break;

      case "general":
      default:
        message =
          "Hello Mayura Jewellers, I visited your website and would like to know more about your jewellery collections.";
        break;
    }
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message.trim())}`;
}

