import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import {
  AUDIT_CTA,
  AUDIT_OFFER,
  CALENDAR_URL,
  EMAIL,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const TITLE = "Contact";
const DESCRIPTION =
  "Tell us what systems you run, or book a call. Salty Air connects the systems trades, home services, and construction businesses already pay for.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
    type: "website",
    siteName: "Salty Air",
  },
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow={SLOGAN}
        headline="Tell us what you run"
        headlineAccent="today."
        sub="Audit, a build, an embedded engagement, or just a question — the more you tell us about the systems you already run, the more useful the first conversation is."
        primaryCta={{ label: "Book a call instead", href: CALENDAR_URL }}
      />

      <Section>
        <div className="grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-2xl border border-primary/15 bg-white p-7">
              <h2 className="font-heading font-bold text-xl text-ink">
                Rather just talk?
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
                Grab a slot on the calendar. No prep needed — bring the list of
                what you pay for and where work keeps falling between it.
              </p>
              <div className="mt-6">
                <Button href={CALENDAR_URL} variant="teal">
                  Book a call
                </Button>
              </div>
            </div>

            <div className="rounded-2xl bg-primary text-white p-7">
              <h2 className="font-heading font-bold text-xl">
                Ready for the audit?
              </h2>
              <p className="mt-3 font-sans text-[15px] leading-relaxed text-white/85">
                The {AUDIT_OFFER} maps every system in the business, finds where
                your team retypes data, and ranks what to connect first.
              </p>
              <div className="mt-6">
                <Button href={AUDIT_CTA.href} variant="peach">
                  {AUDIT_CTA.label}
                </Button>
              </div>
            </div>

            <div>
              <h2 className="label-caps font-sans text-body/60">Email</h2>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block font-sans text-[15px] text-primary hover:text-burnt transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </Shell>
  );
}
