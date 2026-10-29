import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import type { Area } from "@/types";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";

interface AreaCardProps {
  area: Area;
}

/**
 * Extracts the first sentence from the intro paragraphs.
 */
function firstSentence(intro: string[]): string {
  const text = intro[0] ?? "";
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text;
}

export function AreaCard({ area }: AreaCardProps) {
  return (
    <Card hover>
      <IconBadge icon={MapPin} variant="orange" size="md" />
      <h3 className="mt-4 font-heading font-semibold text-lg text-navy">
        {area.name}
      </h3>
      <p className="mt-2 text-slate-700 text-sm leading-relaxed">
        {firstSentence(area.intro)}
      </p>
      <Link
        href={`/areas/${area.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-blue-700 hover:text-orange-600 font-semibold text-sm transition-colors"
      >
        Window cleaning in {area.name}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
