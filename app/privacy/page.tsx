import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/site/LegalPage";
import { EMAIL, SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy";
const DESCRIPTION =
  "How Salty Air collects, uses, and protects information submitted through this site.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: `${TITLE} | Salty Air`,
    description: DESCRIPTION,
    url: `${SITE_URL}/privacy`,
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
    heading: "Who we are",
    body: (
      <>
        <p>
          Salty Air (&ldquo;Salty Air&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) builds and operates AI back-office systems for trade
          and home service businesses. This policy covers{" "}
          <span className="whitespace-nowrap">www.saltyair.co</span> and the
          enquiries we receive through it.
        </p>
        <p>
          You can reach us about anything on this page at <MailLink />.
        </p>
      </>
    ),
  },
  {
    heading: "What we collect",
    body: (
      <>
        <p>
          <strong>What you send us.</strong> When you submit the contact form we
          collect your name, email address, and — if you choose to provide them
          — your company name, phone number, what you&rsquo;re interested in,
          and whatever you write in the message field.
        </p>
        <p>
          <strong>Analytics.</strong> On the production site we use Google
          Analytics 4 to understand which pages people visit and how they got
          there. This includes things like approximate location, device and
          browser type, and pages viewed. We do not use it to identify you
          personally.
        </p>
        <p>
          <strong>Booking and payment.</strong> If you book a call we use Google
          Calendar&rsquo;s appointment scheduling, and if you buy the business
          audit the payment is handled by Stripe. Those services collect
          information directly under their own privacy policies — we never see
          or store your card details.
        </p>
      </>
    ),
  },
  {
    heading: "How we use it",
    body: (
      <>
        <p>
          To reply to your enquiry, to deliver work you&rsquo;ve engaged us for,
          and to keep a record of our correspondence. If you ask about the audit
          or the retainer, we&rsquo;ll follow up about it.
        </p>
        <p>
          We do not sell your information, and we do not add you to a marketing
          list because you filled in the contact form.
        </p>
      </>
    ),
  },
  {
    heading: "Who we share it with",
    body: (
      <>
        <p>
          Only the service providers that make the site work: Vercel (hosting),
          Resend (sending the contact-form emails), Google (Analytics and
          Calendar), and Stripe (payments). Each processes data under its own
          terms.
        </p>
        <p>
          We&rsquo;ll also disclose information if the law requires it. Nothing
          else.
        </p>
      </>
    ),
  },
  {
    heading: "Client data",
    body: (
      <p>
        Work we do for clients often involves their customer records — call
        logs, job details, contact information. That data belongs to the client,
        lives in accounts the client owns, and is used only to operate the
        systems we were engaged to build. We don&rsquo;t reuse one
        client&rsquo;s data for another, and we don&rsquo;t sell it.
      </p>
    ),
  },
  {
    heading: "How long we keep it",
    body: (
      <p>
        Enquiry emails are kept as long as they&rsquo;re commercially useful —
        typically a few years — and then deleted. Analytics data is retained on
        Google&rsquo;s default schedule. If you want your enquiry deleted
        sooner, email <MailLink /> and we&rsquo;ll do it.
      </p>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <>
        <p>
          You can ask us what we hold about you, ask us to correct it, or ask us
          to delete it. Email <MailLink /> and we&rsquo;ll handle it.
        </p>
        <p>
          Most browsers let you block or clear cookies, and Google publishes an
          opt-out for Analytics. Blocking them won&rsquo;t break the site.
        </p>
      </>
    ),
  },
  {
    heading: "Children",
    body: (
      <p>
        This site is for business owners. It isn&rsquo;t directed at anyone
        under 13 and we don&rsquo;t knowingly collect their information.
      </p>
    ),
  },
  {
    heading: "Changes",
    body: (
      <p>
        If this policy changes we&rsquo;ll update the date at the top of the
        page. Material changes will be obvious rather than buried.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What we collect when you contact us, what we do with it, and who else sees it. In plain language."
      updated="October 2026"
      sections={sections}
    />
  );
}
