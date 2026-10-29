"use client";

import React, { useState, useRef } from "react";
import { ServiceCheckboxGroup } from "./ServiceCheckboxGroup";
import { QuoteFormSuccess } from "./QuoteFormSuccess";
import { Button } from "@/components/ui/Button";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  town: string;
  propertyType: string;
  services: string[];
  frequency: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  town?: string;
  services?: string;
  consent?: string;
}

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    town: "",
    propertyType: "House",
    services: [],
    frequency: "Regular cleans",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Field refs to focus first error
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const townRef = useRef<HTMLSelectElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  // Validate a single field
  const validateField = (field: keyof FormData): string | undefined => {
    switch (field) {
      case "fullName":
        if (!formData.fullName.trim()) return "Full name is required.";
        if (formData.fullName.trim().length < 2)
          return "Please enter at least 2 characters.";
        return undefined;

      case "phone":
        if (!formData.phone.trim()) return "Phone number is required.";
        // Loose UK phone pattern allowing +44 or 0 and spaces/dashes
        // eslint-disable-next-line no-useless-escape
        if (!/^(?:(?:\+44\s?\(0\)\s?)|(?:\+44\s?)|(?:0))(?:\d\s?){9,10}$/.test(formData.phone.replace(/[\s\-]/g, ""))) {
          return "Please enter a valid UK phone number (e.g. 07502 102 869).";
        }
        return undefined;

      case "email":
        if (formData.email.trim()) {
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            return "Please enter a valid email address.";
          }
        }
        return undefined;

      case "town":
        if (!formData.town) return "Please select your town or area.";
        return undefined;

      case "services":
        if (formData.services.length === 0)
          return "Please select at least one service.";
        return undefined;

      case "consent":
        if (!formData.consent)
          return "Please tick the consent box so we can reply to you.";
        return undefined;

      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormData) => {
    const errorMsg = validateField(field);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    const nameErr = validateField("fullName");
    if (nameErr) newErrors.fullName = nameErr;

    const phoneErr = validateField("phone");
    if (phoneErr) newErrors.phone = phoneErr;

    const emailErr = validateField("email");
    if (emailErr) newErrors.email = emailErr;

    const townErr = validateField("town");
    if (townErr) newErrors.town = townErr;

    const servErr = validateField("services");
    if (servErr) newErrors.services = servErr;

    const consentErr = validateField("consent");
    if (consentErr) newErrors.consent = consentErr;

    setErrors(newErrors);

    // Focus the first invalid field
    if (nameErr) {
      nameRef.current?.focus();
      return;
    }
    if (phoneErr) {
      phoneRef.current?.focus();
      return;
    }
    if (emailErr) {
      emailRef.current?.focus();
      return;
    }
    if (townErr) {
      townRef.current?.focus();
      return;
    }
    if (servErr) {
      // scroll to services
      const el = document.getElementById("services-error");
      el?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (consentErr) {
      consentRef.current?.focus();
      return;
    }

    // Build human-readable quote message
    const formattedMessage = [
      "Hello Bradley's Window Cleaning,",
      "",
      "I would like to request a free quote for my property:",
      `• Name: ${formData.fullName.trim()}`,
      `• Phone: ${formData.phone.trim()}`,
      formData.email.trim() ? `• Email: ${formData.email.trim()}` : null,
      `• Town/Area: ${formData.town}`,
      `• Property Type: ${formData.propertyType}`,
      `• Services Needed: ${formData.services.join(", ")}`,
      `• Frequency: ${formData.frequency}`,
      formData.message.trim() ? `• Extra Notes: ${formData.message.trim()}` : null,
      "",
      "Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    setSubmittedMessage(formattedMessage);
  };

  if (submittedMessage) {
    return (
      <QuoteFormSuccess
        messageText={submittedMessage}
        onReset={() => setSubmittedMessage(null)}
      />
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-blue-100 p-5 xs:p-6 sm:p-8 shadow-card text-left space-y-6"
    >
      <div>
        <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
          Request a Free Quote
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Fill in your details below and choose how to send them to us.
        </p>
      </div>

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            ref={nameRef}
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            onBlur={() => handleBlur("fullName")}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            placeholder="e.g. Sarah Jenkins"
            className="w-full min-h-12 px-4 rounded-xl border border-blue-200 text-base text-navy placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-blue-600 transition-all"
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-red-700 mt-1" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            ref={phoneRef}
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            onBlur={() => handleBlur("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="e.g. 07502 102 869"
            className="w-full min-h-12 px-4 rounded-xl border border-blue-200 text-base text-navy placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-blue-600 transition-all"
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-700 mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Town */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email Address <span className="text-xs text-slate-500 font-normal">(optional)</span>
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="e.g. sarah@example.co.uk"
            className="w-full min-h-12 px-4 rounded-xl border border-blue-200 text-base text-navy placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-blue-600 transition-all"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-700 mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="town" className="block text-sm font-semibold text-navy mb-1.5">
            Town / Area <span className="text-red-500">*</span>
          </label>
          <select
            ref={townRef}
            id="town"
            required
            value={formData.town}
            onChange={(e) => setFormData({ ...formData, town: e.target.value })}
            onBlur={() => handleBlur("town")}
            aria-invalid={!!errors.town}
            aria-describedby={errors.town ? "town-error" : undefined}
            className="w-full min-h-12 px-4 rounded-xl border border-blue-200 text-base text-navy bg-white focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-blue-600 transition-all"
          >
            <option value="">Select your town...</option>
            <option value="Ilkeston">Ilkeston</option>
            <option value="Long Eaton">Long Eaton</option>
            <option value="Draycott">Draycott</option>
            <option value="Stapleford">Stapleford</option>
            <option value="Spondon">Spondon</option>
            <option value="Other nearby area">Other nearby area</option>
          </select>
          {errors.town && (
            <p id="town-error" className="text-sm text-red-700 mt-1" role="alert">
              {errors.town}
            </p>
          )}
        </div>
      </div>

      {/* Row 3: Property Type */}
      <div>
        <label htmlFor="propertyType" className="block text-sm font-semibold text-navy mb-1.5">
          Property Type
        </label>
        <select
          id="propertyType"
          value={formData.propertyType}
          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
          className="w-full min-h-12 px-4 rounded-xl border border-blue-200 text-base text-navy bg-white focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-blue-600 transition-all"
        >
          <option value="House">House</option>
          <option value="Bungalow">Bungalow</option>
          <option value="Flat / Apartment">Flat / Apartment</option>
          <option value="Commercial / Other">Commercial / Other</option>
        </select>
      </div>

      {/* Row 4: Services Checkbox Group */}
      <ServiceCheckboxGroup
        selectedServices={formData.services}
        onChange={(services) => {
          setFormData({ ...formData, services });
          if (errors.services) setErrors({ ...errors, services: undefined });
        }}
        error={errors.services}
      />

      {/* Row 5: How Often (Radio) */}
      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold text-navy block mb-1.5">
          How Often Would You Like Us to Clean?
        </legend>
        <div className="flex flex-wrap gap-3">
          {["Regular cleans", "One-off clean", "Not sure yet"].map((freq) => (
            <label
              key={freq}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium cursor-pointer transition-colors ${
                formData.frequency === freq
                  ? "bg-blue-50/80 border-blue-600 text-blue-900"
                  : "bg-white border-blue-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="frequency"
                value={freq}
                checked={formData.frequency === freq}
                onChange={() => setFormData({ ...formData, frequency: freq })}
                className="w-4 h-4 text-blue-600 focus:ring-orange-300 border-slate-300"
              />
              <span>{freq}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Row 6: Message (Optional) */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label htmlFor="message" className="block text-sm font-semibold text-navy">
            Extra Details or Notes <span className="text-xs text-slate-500 font-normal">(optional)</span>
          </label>
          <span className="text-xs text-slate-500">
            {formData.message.length}/500 chars
          </span>
        </div>
        <textarea
          id="message"
          rows={3}
          maxLength={500}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. semi-detached, conservatory roof at the back, awkward top-floor window..."
          className="w-full p-4 rounded-xl border border-blue-200 text-base text-navy placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-blue-600 transition-all"
        />
      </div>

      {/* Row 7: Consent Checkbox */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            ref={consentRef}
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) setErrors({ ...errors, consent: undefined });
            }}
            className="w-5 h-5 rounded mt-0.5 text-blue-600 focus:ring-orange-300 border-slate-300"
          />
          <span className="text-sm text-slate-700 leading-snug">
            I&apos;m happy for Bradley&apos;s Window Cleaning to contact me about this quote. <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-red-700 mt-1" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto"
        >
          Review &amp; Send Quote Request
        </Button>
      </div>
    </form>
  );
}
