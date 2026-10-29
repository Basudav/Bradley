"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { CheckCircle2, Copy, Check, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface QuoteFormSuccessProps {
  messageText: string;
  onReset: () => void;
}

export function QuoteFormSuccess({ messageText, onReset }: QuoteFormSuccessProps) {
  const [copied, setCopied] = useState(false);

  const whatsappHref = `https://wa.me/${siteConfig.phone.whatsappNumber}?text=${encodeURIComponent(
    messageText
  )}`;

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    "Free quote request - Bradley's Window Cleaning"
  )}&body=${encodeURIComponent(messageText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback if clipboard API not available
    }
  };

  return (
    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-6">
      <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
      </div>

      <div>
        <h2 className="text-2xl font-heading font-semibold text-navy">
          Your Quote Request Is Ready!
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-700 max-w-md mx-auto">
          Choose how you would like to send your details to Bradley&apos;s Window Cleaning:
        </p>
      </div>

      {/* Two Big Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto min-h-14 px-6 sm:px-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-whatsapp text-white font-semibold hover:bg-whatsapp-dark focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 transition-colors shadow-sm"
        >
          <FaWhatsapp className="w-5 h-5" aria-hidden="true" />
          <span>Send via WhatsApp</span>
        </a>

        <a
          href={mailtoHref}
          className="w-full sm:w-auto min-h-14 px-6 sm:px-8 inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 transition-colors shadow-sm"
        >
          <Mail className="w-5 h-5" aria-hidden="true" />
          <span>Send by Email</span>
        </a>
      </div>

      {/* Form Message Preview & Copy */}
      <div className="bg-white rounded-xl border border-emerald-200 p-4 text-left space-y-3 text-xs sm:text-sm">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-600 uppercase tracking-wider text-xs">
            Summary Message:
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy font-medium text-xs transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Copy message</span>
              </>
            )}
          </button>
        </div>
        <pre className="whitespace-pre-wrap font-sans text-slate-800 text-xs sm:text-sm bg-slate-50 p-3 rounded-lg border border-slate-200">
          {messageText}
        </pre>
      </div>

      {/* Note about no server storage */}
      <p className="text-xs text-slate-500 leading-relaxed max-w-lg mx-auto">
        This website doesn&apos;t store your details on a database. Your message is sent directly through WhatsApp or your personal email app.
      </p>

      <div className="pt-2">
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 underline"
        >
          Edit details / start over
        </button>
      </div>
    </div>
  );
}
