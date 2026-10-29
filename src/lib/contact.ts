import { siteConfig } from "@/config/site";

/**
 * Build a WhatsApp click-to-chat link.
 * @param message Optional pre-filled message text.
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.phone.whatsappNumber}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

/**
 * Build a mailto: link with subject and body.
 */
export function buildMailto(subject: string, body: string): string {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
