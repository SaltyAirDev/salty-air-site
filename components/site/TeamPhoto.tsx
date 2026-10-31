import Image from "next/image";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import {
  SHOW_TEAM_PHOTO,
  TEAM_PHOTO_ALT,
  TEAM_PHOTO_SRC,
} from "@/lib/site";

/**
 * Optional team photograph. Lives on `/about` only — the homepage is text and
 * white space, with no photo slot at all.
 *
 * Off by default (`SHOW_TEAM_PHOTO` in lib/site.ts) and renders nothing at all
 * while it is off, so there is no grey placeholder sitting on a live page. To
 * turn it on: drop the photograph at `TEAM_PHOTO_SRC`
 * (`public/brand/team.jpg`), then flip `SHOW_TEAM_PHOTO` to `true`. Nothing
 * else needs editing.
 */
export function TeamPhoto() {
  if (!SHOW_TEAM_PHOTO) return null;

  return (
    <Section tone="sand" innerClassName="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Eyebrow>The team</Eyebrow>
          <Heading>The people doing the work.</Heading>
          <p className="mt-6 font-sans text-lg leading-relaxed text-body">
            The same team that built and runs our own home services back
            office. No account manager in between.
          </p>
        </div>

        <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-sand">
          <Image
            src={TEAM_PHOTO_SRC}
            alt={TEAM_PHOTO_ALT}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
