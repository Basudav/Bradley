import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaFacebookMessenger } from "react-icons/fa6";

export function FooterContact() {
  return (
    <ul className="space-y-3.5 text-sm text-blue-200">
      {/* Phone */}
      <li>
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center gap-3 hover:text-white transition-colors group"
        >
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-navy transition-colors">
            <Phone className="w-4 h-4 text-orange-400 group-hover:text-navy" aria-hidden="true" />
          </span>
          <span className="font-medium text-white">{siteConfig.phone.display}</span>
        </a>
      </li>

      {/* WhatsApp */}
      <li>
        <a
          href={`https://wa.me/${siteConfig.phone.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 hover:text-white transition-colors group"
        >
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-whatsapp group-hover:text-white transition-colors">
            <FaWhatsapp className="w-4 h-4 text-emerald-400 group-hover:text-white" aria-hidden="true" />
          </span>
          <span>WhatsApp: {siteConfig.phone.display}</span>
        </a>
      </li>

      {/* Email */}
      <li>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-start gap-3 hover:text-white transition-colors group"
        >
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-white/20 transition-colors">
            <Mail className="w-4 h-4 text-blue-300" aria-hidden="true" />
          </span>
          <span className="[overflow-wrap:anywhere]">{siteConfig.email}</span>
        </a>
      </li>

      {/* Location */}
      <li className="flex items-start gap-3">
        <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
          <MapPin className="w-4 h-4 text-blue-300" aria-hidden="true" />
        </span>
        <span>Elka&apos;s Rise, Ilkeston, United Kingdom</span>
      </li>

      {/* Open note */}
      <li className="flex items-start gap-3">
        <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
          <Clock className="w-4 h-4 text-orange-400" aria-hidden="true" />
        </span>
        <span className="text-white font-medium">Message us any time</span>
      </li>

      {/* Social links if configured */}
      {(siteConfig.social.facebookUrl || siteConfig.social.messengerUrl) && (
        <li className="flex items-center gap-2 pt-2">
          {siteConfig.social.facebookUrl && (
            <a
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bradley's Window Cleaning on Facebook"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors"
            >
              <FaFacebook className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
          {siteConfig.social.messengerUrl && (
            <a
              href={siteConfig.social.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message on Facebook Messenger"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#00B2FF] text-white flex items-center justify-center transition-colors"
            >
              <FaFacebookMessenger className="w-5 h-5" aria-hidden="true" />
            </a>
          )}
        </li>
      )}
    </ul>
  );
}
