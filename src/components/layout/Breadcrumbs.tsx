import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/types";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="overflow-x-auto whitespace-nowrap scrollbar-none py-1 mb-4 text-sm text-slate-600"
    >
      <ol className="inline-flex items-center gap-1.5">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight
                className="w-3.5 h-3.5 text-slate-400 shrink-0"
                aria-hidden="true"
              />
              {isLast || !item.href ? (
                <span
                  className="font-medium text-navy"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
