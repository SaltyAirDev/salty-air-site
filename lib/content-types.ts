/**
 * Shared shape for every audience variant of the site (law, business, and any
 * future industry). `lib/content.ts` holds the law copy; `lib/content-business.ts`
 * holds the general-business copy. Section components read one slice each.
 */

/** A run of text inside a headline; `accent` renders it in the section's accent colour. */
export type RichSpan = { text: string; accent?: boolean };
/** One visual line of a headline. */
export type RichLine = RichSpan[];
/** A headline as an ordered list of lines. */
export type RichHeadline = RichLine[];

export type Link = { label: string; href: string };

export type NavLink = Link & {
  /** Present on dropdown parents (e.g. Industries). */
  children?: Array<Link & { desc?: string }>;
};

export type NavContent = {
  brand: string;
  links: NavLink[];
  cta: Link;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  sub: string;
  trust: string;
  primaryCta: Link;
};

export type SolutionsContent = {
  eyebrow: string;
  /** Plain-text version, used for metadata/SEO. */
  headline: string;
  headlineRich: RichHeadline;
  sub: string;
  ctaLabel: string;
  categories: Array<{ title: string; desc: string }>;
};

export type TrustContent = {
  headline: string;
  link: Link;
};

export type RoiContent = {
  eyebrow: string;
  headline: string;
  headlineRich: RichHeadline;
  sub: string;
  metrics: Array<{ label: string; value: string; trend: string; desc: string }>;
  dashboardLabel: string;
  footnote: string;
  ctaLabel: string;
};

export type ProcessContent = {
  eyebrow: string;
  headline: string;
  headlineRich: RichHeadline;
  sub: string;
  steps: Array<{ title: string; desc: string }>;
};

export type PricingTier = {
  title: string;
  price: string;
  period: string;
  desc: string;
  highlight: boolean;
  ctaType: "checkout" | "contact";
  cta: Link;
  note: string | null;
  features: string[];
};

export type PricingContent = {
  eyebrow: string;
  headline: string;
  sub: string;
  tiers: PricingTier[];
  howItWorks: {
    eyebrow: string;
    headline: string;
    headlineRich: RichHeadline;
    body: string;
    tiers: string[];
  };
  note: string;
};

export type FaqContent = {
  eyebrow: string;
  headline: string;
  items: Array<{ q: string; a: string }>;
};

export type SocialContent = {
  headline: string;
  stats: Array<{ value: string; label: string }>;
  quote: { body: string; author: string; role: string };
};

export type FinalCtaContent = {
  eyebrow: string;
  headline: RichHeadline;
  sub: string;
  bookingHref: string;
  form: {
    /** Label + placeholder for the organisation field (firm / company). */
    orgLabel: string;
    orgPlaceholder: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    /** Options for the "I'm interested in" select. */
    interests: string[];
  };
};

export type FooterContent = {
  brand: string;
  tagline: string;
  email: string;
  columns: Array<{ title: string; links: Link[] }>;
  bottom: string;
  /** Small right-aligned line in the footer bar. */
  badge: string;
};
