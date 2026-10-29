"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console
    console.error(error);
  }, [error]);

  return (
    <section className="py-20 sm:py-28 text-center bg-blue-50/60 min-h-[50vh] flex items-center">
      <Container className="max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy">
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-slate-700 leading-relaxed">
          We encountered an unexpected error while loading this page. Please try again or head back to our home page.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button onClick={() => reset()} variant="primary" size="lg">
            Try again
          </Button>
          <ButtonLink href="/" variant="outline" size="lg">
            Back to Home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
