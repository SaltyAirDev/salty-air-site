/**
 * Main nav and footer structure.
 *
 * Integrations and Embedded are the two offers, so they lead. Trades and
 * general contractors are both served from day one and both sit in the
 * Industries dropdown. Law and the other inbound work deliberately do not
 * appear in the main nav — they live in the footer only. Data work is not an
 * offer and is not listed as one anywhere.
 *
 * The nav button is the audit, not the contact form: /audit is the site's one
 * conversion target, and it carries both a call and checkout.
 */
import { AUDIT_NAME, AUDIT_PATH, AUDIT_PRICE, EMAIL, LINKEDIN_URL } from "./site";
import { industryLinks } from "./trades";

export type NavLink = {
  label: string;
  href: string;
  /** Present on dropdown parents (Industries). */
  children?: Array<{ label: string; href: string }>;
};

export const navLinks: NavLink[] = [
  { label: "Integrations", href: "/integrations" },
  { label: "Embedded", href: "/embedded" },
  { label: AUDIT_NAME, href: AUDIT_PATH },
  {
    label: "Industries",
    href: industryLinks[0].href,
    children: industryLinks,
  },
  // Pricing stays a route and a footer link, but it is no longer in the main
  // nav: with one published price, /audit does that job and the bar was long.
  { label: "Case Study", href: "/case-studies/salty-home-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navCta = { label: `Book the ${AUDIT_PRICE} audit`, href: AUDIT_PATH };

export const footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "What we do",
    links: [
      { label: "Integrations", href: "/integrations" },
      { label: "Embedded engineering", href: "/embedded" },
      { label: `${AUDIT_PRICE} ${AUDIT_NAME}`, href: AUDIT_PATH },
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
