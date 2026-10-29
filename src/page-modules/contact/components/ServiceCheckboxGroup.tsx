"use client";

import React from "react";
import { services } from "@/data/services";

interface ServiceCheckboxGroupProps {
  selectedServices: string[];
  onChange: (services: string[]) => void;
  error?: string;
}

export function ServiceCheckboxGroup({
  selectedServices,
  onChange,
  error,
}: ServiceCheckboxGroupProps) {
  const options = [
    ...services.map((s) => ({ id: s.slug, label: s.title })),
    { id: "not-sure", label: "Not sure yet" },
  ];

  const handleToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      onChange(selectedServices.filter((s) => s !== id));
    } else {
      onChange([...selectedServices, id]);
    }
  };

  return (
    <fieldset className="space-y-2 text-left">
      <legend className="text-sm font-semibold text-navy block mb-2">
        Services Needed <span className="text-red-500">*</span>
      </legend>

      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
        {options.map((opt) => {
          const checked = selectedServices.includes(opt.id);
          return (
            <label
              key={opt.id}
              className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium cursor-pointer transition-colors ${
                checked
                  ? "bg-blue-50/80 border-blue-600 text-blue-900"
                  : "bg-white border-blue-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                name="services"
                value={opt.id}
                checked={checked}
                onChange={() => handleToggle(opt.id)}
                className="w-4 h-4 rounded text-blue-600 focus:ring-orange-300 border-slate-300"
              />
              <span>{opt.label}</span>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="text-sm text-red-700 mt-1.5" role="alert" id="services-error">
          {error}
        </p>
      )}
    </fieldset>
  );
}
