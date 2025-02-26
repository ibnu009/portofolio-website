import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SocialMedia } from "@/app/types/portos";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";

export default function Footer({ sm }: { sm: SocialMedia[] }) {
  return (
    <div>
      <div className="text-center py-8 text-neutral-500 font-outfit space-y-5 pt-20 pb-20">
        <p>Build using Next.js and Tailwind CSS</p>
        <p>Contact me on :</p>
        <div className="button-wrapping space-x-5 font-outfit flex justify-center">
          <ul className="flex gap-5 text-2xl text-neutral-500">
            {sm.map((item: SocialMedia, i: number) => (
              <li key={i}>
                <Link
                  href={item.link}
                  target="_blank"
                >
                  <Icon icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
