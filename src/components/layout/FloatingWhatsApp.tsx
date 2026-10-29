import React from "react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa6";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phone.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-whatsapp hover:bg-whatsapp-dark text-white shadow-lg items-center justify-center transition-all hover:scale-105 active:scale-95 touch-manipulation focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
    >
      <FaWhatsapp className="w-7 h-7" aria-hidden="true" />
    </a>
  );
}
