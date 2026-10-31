import Link from "next/link";
import { Grain } from "@/components/brand/Grain";
import { Shell } from "@/components/site/Shell";
import { Section, Eyebrow, Heading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { Button } from "@/components/ui/Button";
import { frameworkSteps } from "@/lib/offers";
import {
  AUDIT_CREDIT_SHORT,
  AUDIT_CTA,
  AUDIT_OFFER,
  AUDIT_PATH,
  AUDIT_PRICE,
  AUDIT_SESSION,
  AUDIT_TURNAROUND,
  CALL_CTA,
  HERO_HEADLINE,
  HERO_HEADLINE_ACCENT,
  HERO_SUB,
  QUOTED_AFTER_AUDIT,
  SHS_NAME,
  SHS_URL,
  STORY_BODY,
  STORY_HEADING,
} from "@/lib/site";

/**
 * The homepage. One column, one idea per screen, one CTA in the hero.
 *
 * Deliberately sparse: the industries grid, the system chip wall, the value
 * pillars, the three-card offer ladder, and the FAQ all moved off the front
 * door. Those pages are all still live and still linked — from the sections
 * below and from the footer — but the homepage's job is to say what we do, who
 * we are, how it runs, and where to start, and then stop talking.
 *
 * Page metadata for `/` lives in app/layout.tsx, since it is the site-wide
 * default.
 */

/** A quiet inline text link — used instead of a second button. */
function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    "font-sans font-semibold text-[15px] text-primary underline decoration-primary/30 decoration-1 underline-offset-4 hover:decoration-primary transition-colors";

  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <Shell>
      {/* Hero — one headline, one line under it, one CTA. */}
      <section className="teal-band relative overflow-hidden text-white">
        <Grain />
        <div className="relative max-w-3xl mx-auto px-6 md:px-10 pt-40 pb-28 md:pt-52 md:pb-36 text-center">
          <span className="label-caps block font-sans text-accent">
            Integrations &amp; embedded engineering
          </span>

          <h1 className="mt-7 font-heading font-bold tracking-tight text-[2.6rem] leading-[1.06] md:text-6xl md:leading-[1.04]">
            {HERO_HEADLINE}{" "}
            <span className="text-accent">{HERO_HEADLINE_ACCENT}</span>
          </h1>

          <p className="mt-8 font-sans text-lg md:text-xl leading-relaxed text-white/85 max-w-xl mx-auto">
            {HERO_SUB}
          </p>

          <div className="mt-11">
            <Button href={AUDIT_CTA.href} variant="peach">
              {AUDIT_CTA.label}
            </Button>
          </div>

          <p className="mt-12 label-caps font-sans text-white/55">
            Remote-first &middot; United States
          </p>
        </div>
      </section>

      {/* Story — an operator that builds. No photograph here on purpose. */}
      <Section className="py-24 md:py-36" innerClassName="max-w-2xl mx-auto">
        <Eyebrow>Who you&rsquo;d be working with</Eyebrow>
        <Heading>{STORY_HEADING}</Heading>
        <div className="mt-7 flex flex-col gap-5 font-sans text-lg leading-relaxed text-body">
          {STORY_BODY.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8">
          <TextLink href={SHS_URL}>Visit {SHS_NAME} &rarr;</TextLink>
        </p>
      </Section>

      {/* Audit → Connect → Automate, stacked. */}
      <Section
        tone="sand"
        className="py-24 md:py-36"
        innerClassName="max-w-2xl mx-auto"
      >
        <Eyebrow>How it runs</Eyebrow>
        <Heading>Audit, connect, automate.</Heading>
        <p className="mt-7 font-sans text-lg leading-relaxed text-body">
          In that order, because connecting what you already own is the cheapest
          fix available and almost nobody has had it done properly.
        </p>

        <ol className="mt-14 flex flex-col">
          {frameworkSteps.map((step, i) => (
            <li
              key={step.title}
              className="border-t border-primary/15 py-8 first:pt-0 first:border-t-0"
            >
              <span className="label-caps font-sans text-primary/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading font-bold text-2xl text-ink">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-[17px] leading-relaxed text-body">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Two offers. The audit is the only price on the site. */}
      <Section className="py-24 md:py-36" innerClassName="max-w-2xl mx-auto">
        <Eyebrow>Two ways to start</Eyebrow>
        <Heading>An audit, or an engineering team.</Heading>

        <div className="mt-14 flex flex-col gap-14">
          <div>
            <span className="label-caps font-sans text-primary/60">
              Start here
            </span>
            <h3 className="mt-3 font-heading font-bold text-2xl md:text-[1.75rem] text-ink">
              {AUDIT_OFFER}
            </h3>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-body">
              A working session of {AUDIT_SESSION} on every system in the
              business, then written findings within {AUDIT_TURNAROUND}: what
              you pay for, where work falls between systems, and the
              connections worth making first. You keep the document whether or
              not we work together after.
            </p>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-body/85">
              {AUDIT_CREDIT_SHORT}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={AUDIT_PATH} variant="teal">
                What&rsquo;s in the audit
              </Button>
              <TextLink href={CALL_CTA.href}>{CALL_CTA.label} first &rarr;</TextLink>
            </div>
            <p className="mt-5 font-sans text-sm leading-relaxed text-body/70">
              Card checkout is on the audit page, under the scope — so you read
              what the {AUDIT_PRICE} buys before you pay it.
            </p>
          </div>

          <div className="border-t border-primary/15 pt-14">
            <span className="label-caps font-sans text-primary/60">
              Or go further
            </span>
            <h3 className="mt-3 font-heading font-bold text-2xl md:text-[1.75rem] text-ink">
              Embedded engineering &amp; custom builds
            </h3>
            <p className="mt-4 font-sans text-[17px] leading-relaxed text-body">
              The work the audit found, done — integrations between the systems
              you already run, the missing pieces set up, and custom software
              where nothing off the shelf fits your shop. Or we stay in the
              business monthly and own the whole stack, shipping continuously.
              Everything lands in accounts you own, documented as we go.
            </p>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-body/85">
              {QUOTED_AFTER_AUDIT} — a scope comes out of the findings, and the
              number comes out of the scope. No packages, no tiers, no figures
              invented to fill a table.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <TextLink href="/embedded">How embedding works &rarr;</TextLink>
              <TextLink href="/integrations">What we connect &rarr;</TextLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Proof: one engagement, facts only. No logos, no metrics. */}
      <Section
        tone="sand"
        className="py-20 md:py-28"
        innerClassName="max-w-2xl mx-auto"
      >
        <Eyebrow>Proof</Eyebrow>
        <h2 className="mt-4 font-heading font-bold tracking-tight text-2xl md:text-3xl text-ink">
          A stack we built and still run.
        </h2>
        <p className="mt-5 font-sans text-[17px] leading-relaxed text-body">
          {SHS_NAME} answers its missed calls, routes its web leads into the
          system it dispatches from, chases its own estimates, and asks for its
          own reviews — on software we built and maintain. What was built is
          written up in full; there are no metrics on it, because none have been
          measured yet.
        </p>
        <p className="mt-7">
          <TextLink href="/case-studies/salty-home-services">
            Read the case study &rarr;
          </TextLink>
        </p>
      </Section>

      <CtaBand
        sub={`Start with the ${AUDIT_OFFER} and you'll have the map of your own stack, or book a call and describe it to us first.`}
      />
    </Shell>
  );
}
