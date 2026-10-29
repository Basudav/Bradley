import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Truck } from "lucide-react";

export function VanBranding() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-orange-50/50 rounded-2xl border border-blue-100 p-6 sm:p-8 lg:p-10 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Spot Us Locally
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-navy">
            Our Branded Van
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Keep an eye out for us on the road. You won&apos;t miss us! We drive a silver Vauxhall van featuring a bold orange and blue wrap, our contact telephone number, and our friendly thumbs-up mascot.
          </p>

          <p className="text-sm sm:text-base text-slate-600">
            If you see us working on your street, feel free to say hello or ask for a free on-the-spot quote.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl overflow-hidden shadow-card border-2 border-white">
            {siteConfig.assets.vanPhoto ? (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={siteConfig.assets.vanPhoto}
                  alt="Bradley's Window Cleaning silver Vauxhall van with orange and blue wrap"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <ImagePlaceholder
                aspect="4/3"
                label="Branded Orange & Blue Van"
                icon={Truck}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
