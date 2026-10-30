import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { AUDIT_PRICE, EMAIL, SITE_URL } from "@/lib/site";

const TITLE = "Terms of Service";
const DESCRIPTION =
  "The terms that apply to using www.saltyair.co and to engaging Salty Air for an audit, an integration build, or an embedded engagement.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/terms`,
    type: "website",
    siteName: "Salty Air",
  },
};

const MailLink = () => (
  <a
    href={`mailto:${EMAIL}`}
    className="text-primary underline underline-offset-4 hover:text-burnt transition-colors"
  >
    {EMAIL}
  </a>
);

const sections: LegalSection[] = [
  {
    heading: "Using this site",
    body: (
      <p>
        By using <span className="whitespace-nowrap">www.saltyair.co</span> you
        agree to these terms. If you don&rsquo;t, please don&rsquo;t use the
        site. Salty Air operates the site and the services described on it.
      </p>
    ),
  },
  {
    heading: "What the site is",
    body: (
      <>
        <p>
          The pages here describe services we offer. They are not an offer to
          contract on fixed terms, and nothing on the site creates a
          relationship between us until we&rsquo;ve both agreed to a specific
          piece of work in writing.
        </p>
        <p>
          We try to keep everything accurate and current. Where we describe what
          a system does, we&rsquo;re describing what we build — not guaranteeing
          a particular business result.
        </p>
      </>
    ),
  },
  {
    heading: "The business audit",
    body: (
      <>
        <p>
          The business audit is a fixed-fee piece of work at {AUDIT_PRICE}, paid
          up front through Stripe. It covers a walkthrough of how work moves
          through your business, a written report, and a review call.
        </p>
        <p>
          The report is yours to keep and act on, whether or not you engage us
          afterwards. If we can&rsquo;t schedule the walkthrough or we conclude
          there&rsquo;s nothing useful to tell you, we&rsquo;ll refund the fee.
        </p>
      </>
    ),
  },
  {
    heading: "Builds and embedded engagements",
    body: (
      <>
        <p>
          An integration build is a scope of work, and an embedded engagement
          is monthly. Either way the scope and the fee are agreed in writing
          before work starts, and both are quoted after the audit. No price for
          either is published on this site — what they cost depends on your
          business, and we&rsquo;d rather quote honestly than publish a figure
          we&rsquo;d have to renegotiate.
        </p>
        <p>
          Either of us can end an engagement with reasonable notice as set out
          in it. Work already delivered is payable; work not yet done
          isn&rsquo;t.
        </p>
      </>
    ),
  },
  {
    heading: "Your responsibilities",
    body: (
      <p>
        You&rsquo;re responsible for the accounts, phone numbers, and systems we
        connect to, for the accuracy of what you tell us about your business,
        and for how you communicate with your own customers. If a system we
        build sends messages on your behalf, you remain the sender for the
        purposes of the rules that apply to it.
      </p>
    ),
  },
  {
    heading: "Third-party services",
    body: (
      <p>
        What we build sits on top of services such as Quo, Housecall Pro,
        Jobber, ServiceTitan, Procore, QuickBooks, Google, and Stripe. Those
        services have their own terms,
        their own pricing, and their own uptime. We&rsquo;re not responsible for
        their availability or for changes they make, though we&rsquo;ll work
        with you when something on their side changes.
      </p>
    ),
  },
  {
    heading: "Ownership",
    body: (
      <>
        <p>
          You own your business data and the accounts it lives in. Once
          we&rsquo;ve been paid for a piece of work, the deliverables for that
          work are yours.
        </p>
        <p>
          We keep ownership of our own general methods, templates, and tooling —
          the things we bring to every engagement rather than build for yours.
          The content and branding on this site belong to Salty Air.
        </p>
      </>
    ),
  },
  {
    heading: "No guaranteed outcome",
    body: (
      <p>
        We don&rsquo;t publish performance figures on this site, and we
        don&rsquo;t promise a specific number of booked jobs, leads, or
        rankings. What we commit to is building and running the systems
        described in your engagement.
      </p>
    ),
  },
  {
    heading: "Liability",
    body: (
      <p>
        To the extent the law allows, our total liability for any claim relating
        to the site or our services is limited to the fees you paid us for the
        work the claim relates to. We&rsquo;re not liable for indirect or
        consequential losses, including lost profits or lost business.
      </p>
    ),
  },
  {
    heading: "Changes and contact",
    body: (
      <>
        <p>
          We may update these terms; the date at the top of the page shows when
          they last changed. Continuing to use the site after a change means you
          accept it.
        </p>
        <p>
          Questions about these terms go to <MailLink />.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The terms that apply to this site and to engaging Salty Air for an audit, a build, or an embedded engagement."
      updated="October 2026"
      sections={sections}
    />
  );
}
