import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Button } from "@/components/ui/Button";
import {
  AUDIT_CHECKOUT_URL,
  AUDIT_PRICE,
  CALENDAR_URL,
  EMAIL,
  SITE_URL,
  SLOGAN,
} from "@/lib/site";

const TITLE = "Contact";
const DESCRIPTION =
  "Tell us how your shop runs, or book a call. Salty Air builds the AI back office for trade and home service businesses.";

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
        headline="Tell us how the shop runs"
        headlineAccent="today."
        sub="The more you tell us about the calls you're missing and what you dispatch from, the more useful the first conversation is."
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
                Grab a slot on the calendar. No prep needed — bring how many
                calls you miss in a week and what you dispatch from.
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
                The {AUDIT_PRICE} business audit maps where your shop is losing
                work and hands you a written plan. Book it directly.
              </p>
              <div className="mt-6">
                <Button href={AUDIT_CHECKOUT_URL} variant="peach">
                  Book the {AUDIT_PRICE} audit
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
              <p className="mt-6 label-caps font-sans text-body/60">Based in</p>
              <p className="mt-2 font-sans text-[15px] text-body">Salt Lake, UT</p>
            </div>
          </aside>
        </div>
      </Section>
    </Shell>
  );
}
