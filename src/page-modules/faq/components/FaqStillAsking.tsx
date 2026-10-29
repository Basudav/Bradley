import React from "react";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CallButton } from "@/components/ui/CallButton";
import { EmailButton } from "@/components/ui/EmailButton";
import { HelpCircle } from "lucide-react";

export function FaqStillAsking() {
  return (
    <Card className="mt-14 sm:mt-16 p-6 sm:p-10 bg-gradient-to-br from-blue-50 to-white border-blue-200 text-center max-w-3xl mx-auto shadow-sm">
      <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
        <HelpCircle className="w-6 h-6" aria-hidden="true" />
      </div>

      <h2 className="text-xl sm:text-2xl font-heading font-semibold text-navy">
        Still have a question?
      </h2>

      <p className="mt-2 text-sm sm:text-base text-slate-700 max-w-xl mx-auto">
        We are always happy to help. Send us a message or give us a quick call to discuss your windows, doors, gutters or fascias.
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

        <EmailButton
          subject="Window Cleaning Query"
          body="Hello Bradley's Window Cleaning,\n\nI have a question about your services:\n\n"
          variant="secondary"
          size="md"
          className="w-full sm:w-auto"
        >
          Email us
        </EmailButton>
      </div>
    </Card>
  );
}
