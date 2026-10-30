import Image from "next/image";
import { Grain } from "@/components/brand/Grain";
import { Button } from "@/components/ui/Button";
import type { ReactNode } from "react";

type Cta = { label: string; href: string };

/**
 * The deep-teal grain hero used at the top of every page.
 *
 * `eyebrow` carries the brand line on page after page; `headline` +
 * `headlineAccent` render as white type with the last phrase in peach, the way
 * the deck sets accent words.
 *
 * With `image`, the photograph takes the right half on desktop and sits under
 * the copy on mobile — the homepage layout from the mockup.
 */
export function PageHero({
  eyebrow,
  headline,
  headlineAccent,
  sub,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  priority = false,
  footnote,
  children,
}: {
  eyebrow: string;
  headline: string;
  headlineAccent?: string;
  sub: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image?: string;
  imageAlt?: string;
  priority?: boolean;
  footnote?: string;
  children?: ReactNode;
}) {
  return (
    <section className="teal-band relative overflow-hidden text-white">
      <Grain />

      <div className="relative grid lg:grid-cols-2 items-stretch">
        <div className="px-6 md:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] lg:pr-16 pt-36 pb-20 md:pt-44 md:pb-28 max-w-3xl">
          <span className="label-caps block font-sans text-accent">{eyebrow}</span>

          <h1 className="mt-6 font-heading font-bold tracking-tight text-[2.6rem] leading-[1.06] md:text-6xl md:leading-[1.04]">
            {headline}
            {headlineAccent ? (
              <>
                {" "}
                <span className="text-accent">{headlineAccent}</span>
              </>
            ) : null}
          </h1>

          <p className="mt-7 font-sans text-lg md:text-xl leading-relaxed text-white/85 max-w-xl">
            {sub}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              {primaryCta && (
                <Button href={primaryCta.href} variant="peach">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}

          {footnote && (
            <p className="mt-10 label-caps font-sans text-white/55">{footnote}</p>
          )}

          {children}
        </div>

        {image && (
          <div className="relative min-h-[18rem] lg:min-h-full order-first lg:order-last">
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Blends the photo edge into the teal instead of a hard seam. */}
            <div
              className="absolute inset-0 lg:bg-gradient-to-r from-[#2b6064] via-transparent to-transparent"
              aria-hidden
            />
          </div>
        )}
      </div>
    </section>
  );
}
