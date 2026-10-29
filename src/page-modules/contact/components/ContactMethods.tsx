import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaFacebookMessenger } from "react-icons/fa6";

export function ContactMethods() {
  return (
    <div className="space-y-4 text-left">
      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy mb-4">
        Direct Contact Options
      </h2>

      {/* Call */}
      <a
        href={siteConfig.phone.href}
        className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-white border border-blue-100 shadow-card hover:border-blue-300 hover:shadow-card-hover transition-all group"
      >
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
          <Phone className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
            Give us a call
          </span>
          <span className="text-base sm:text-lg font-heading font-bold text-navy group-hover:text-blue-700">
            {siteConfig.phone.display}
          </span>
        </div>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.phone.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-white border border-blue-100 shadow-card hover:border-emerald-300 hover:shadow-card-hover transition-all group"
      >
        <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-whatsapp group-hover:text-white transition-colors">
          <FaWhatsapp className="w-6 h-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
            Chat on WhatsApp
          </span>
          <span className="text-base sm:text-lg font-heading font-bold text-navy group-hover:text-emerald-700">
            {siteConfig.phone.display}
          </span>
        </div>
      </a>

      {/* Email */}
      <a
        href={`mailto:${siteConfig.email}`}
        className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-white border border-blue-100 shadow-card hover:border-blue-300 hover:shadow-card-hover transition-all group"
      >
        <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-navy transition-colors">
          <Mail className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
            Send an email
          </span>
          <span className="text-sm xs:text-base font-medium text-navy [overflow-wrap:anywhere] group-hover:text-orange-700">
            {siteConfig.email}
          </span>
        </div>
      </a>

      {/* Base Location */}
      <div className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-white border border-blue-100 shadow-card">
        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
          <MapPin className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
            Base Location
          </span>
          <span className="text-sm sm:text-base font-medium text-navy">
            Elka&apos;s Rise, Ilkeston, United Kingdom
          </span>
        </div>
      </div>

      {/* Always open note */}
      <div className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-blue-50/70 border border-blue-100">
        <div className="w-12 h-12 rounded-xl bg-white text-orange-500 flex items-center justify-center shrink-0 shadow-sm">
          <Clock className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold text-blue-800 tracking-wider block">
            Availability
          </span>
          <span className="text-sm sm:text-base font-semibold text-navy">
            Always open for messages
          </span>
        </div>
      </div>

      {/* Social links if set */}
      {siteConfig.social.facebookUrl && (
        <a
          href={siteConfig.social.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-white border border-blue-100 shadow-card hover:border-[#1877F2] transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1877F2] flex items-center justify-center shrink-0 group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
            <FaFacebook className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Facebook Page
            </span>
            <span className="text-sm sm:text-base font-semibold text-navy group-hover:text-[#1877F2]">
              Bradley&apos;s Window Cleaning
            </span>
          </div>
        </a>
      )}

      {siteConfig.social.messengerUrl && (
        <a
          href={siteConfig.social.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 min-h-16 rounded-2xl bg-white border border-blue-100 shadow-card hover:border-[#00B2FF] transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#00B2FF] flex items-center justify-center shrink-0 group-hover:bg-[#00B2FF] group-hover:text-white transition-colors">
            <FaFacebookMessenger className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Messenger
            </span>
            <span className="text-sm sm:text-base font-semibold text-navy group-hover:text-[#00B2FF]">
              Message on Facebook
            </span>
          </div>
        </a>
      )}
    </div>
  );
}
