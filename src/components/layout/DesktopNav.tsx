"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavItems } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
      {mainNavItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative py-2 px-2.5 xl:px-3 text-[15px] xl:text-base font-medium rounded-lg transition-colors",
              isActive
                ? "text-blue-700 font-semibold"
                : "text-navy hover:text-blue-700 hover:bg-blue-50/60"
            )}
          >
            {item.label}
            {isActive && (
              <span
                className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-orange-500 rounded-full"
                aria-hidden="true"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
