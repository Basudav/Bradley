import React from "react";
import { Container } from "@/components/ui/Container";
import { HalftoneBackground } from "@/components/ui/HalftoneBackground";
import { NotFoundActions } from "./components/NotFoundActions";

export function NotFoundPage() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-blue-50/60 overflow-hidden flex items-center min-h-[60vh]">
      <HalftoneBackground />

      <Container className="relative z-10 text-center max-w-2xl mx-auto">
        <span className="font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-orange-500 block mb-2">
          404
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy text-balance">
          Page Not Found
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you were looking for. It might have moved or the link might be broken.
        </p>

        <NotFoundActions />
      </Container>
    </section>
  );
}
