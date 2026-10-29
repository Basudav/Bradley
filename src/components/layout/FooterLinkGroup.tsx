import React from "react";
import Link from "next/link";
import type { NavItem } from "@/types";

interface FooterLinkGroupProps {
  title: string;
  links: NavItem[];
}

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="font-heading font-semibold text-lg text-white mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-blue-200 hover:text-white hover:underline transition-colors inline-block py-0.5"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
