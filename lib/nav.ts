/**
 * Main nav and footer structure.
 *
 * Integrations and Embedded are the two offers, so they lead. Trades and
 * construction are both served from day one and both sit in the Industries
 * dropdown. Law and the other inbound work deliberately do not appear in the
 * main nav — they live in the footer only. Data work is not an offer and is
 * not listed as one anywhere.
 */
import { EMAIL, LINKEDIN_URL } from "./site";
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
  {
    label: "Industries",
    href: industryLinks[0].href,
    children: industryLinks,
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Study", href: "/case-studies/salty-home-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navCta = { label: "Book a call", href: "/contact" };

export const footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "What we do",
    links: [
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
