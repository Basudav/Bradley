import React from "react";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { MapPin } from "lucide-react";

export function CoverageNote() {
  return (
    <Card className="mt-12 sm:mt-16 p-6 sm:p-8 bg-blue-50/80 border-blue-200 text-center max-w-3xl mx-auto">
      <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
        <MapPin className="w-6 h-6" aria-hidden="true" />
      </div>

      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
        Don&apos;t see your street or village?
      </h2>

      <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mx-auto">
        We regularly cover surrounding areas across Erewash and nearby neighborhoods. Not sure if we come to your road? Send us a quick message with your postcode and we&apos;ll let you know straight away.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
        <WhatsAppButton size="md" className="w-full sm:w-auto">
          Message on WhatsApp
        </WhatsAppButton>

        <CallButton
          variant="outline"
          size="md"
          showNumber
          className="w-full sm:w-auto"
        />
      </div>
    </Card>
  );
}
