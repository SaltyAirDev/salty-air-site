/**
 * Main nav and footer structure.
 *
 * The main nav is **exactly three items**: Home, the audit, and a call. That
 * is the whole bar. Everything the old nav carried — integrations, embedded,
 * the industries dropdown, the case study, pricing, about, contact — is either
 * a section on the homepage or a footer link. The pages all still exist and
 * still rank; they just do not compete for attention in the header.
 *
 * `/audit` is the site's one conversion target and carries both the call and
 * checkout, so it is the one page in the bar.
 */
import { AUDIT_NAME, AUDIT_PATH, AUDIT_PRICE, CALENDAR_URL, EMAIL, LINKEDIN_URL } from "./site";
import { industryLinks } from "./trades";

export type NavLink = {
  label: string;
  href: string;
  /** Leaves the app: rendered as a plain anchor in a new tab. */
  external?: boolean;
  /** Rendered as the peach pill on the right of the bar rather than a text link. */
  cta?: boolean;
};

/**
 * Three items, in this order. Keep it at three — the homepage is the index of
 * everything else. "Book a call" renders as the bar's one button, so no item
 * appears twice.
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: AUDIT_NAME, href: AUDIT_PATH },
  { label: "Book a call", href: CALENDAR_URL, external: true, cta: true },
];

export const footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "What we do",
    links: [
      { label: `${AUDIT_PRICE} ${AUDIT_NAME}`, href: AUDIT_PATH },
      { label: "Integrations", href: "/integrations" },
      { label: "Embedded engineering", href: "/embedded" },
      { label: "Pricing", href: "/pricing" },
      { label: "Case Study", href: "/case-studies/salty-home-services" },
    ],
  },
  {
    title: "Industries",
    links: industryLinks,
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Other Work", href: "/other-work" },
      { label: "Book a call", href: CALENDAR_URL },
      { label: "LinkedIn", href: LINKEDIN_URL },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
];

/** Rendered as real anchors in the footer bar — these were plain text before. */
export const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
