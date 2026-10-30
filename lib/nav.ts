/**
 * Main nav and footer structure.
 *
 * Law and the other inbound work deliberately do not appear in the main nav —
 * they live in the footer only, so the site reads as a trade shop's back
 * office and not an agency with a menu of verticals.
 */
import { EMAIL, LINKEDIN_URL } from "./site";
import { tradeLinks } from "./trades";

export type NavLink = {
  label: string;
  href: string;
  /** Present on dropdown parents (Trades). */
  children?: Array<{ label: string; href: string }>;
};

export const navLinks: NavLink[] = [
  { label: "AI Back Office", href: "/ai-back-office" },
  { label: "Pricing", href: "/pricing" },
  { label: "Trades", href: tradeLinks[0].href, children: tradeLinks },
  { label: "Case Study", href: "/case-studies/salty-home-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const navCta = { label: "Book a call", href: "/contact" };

export const footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "What we do",
    links: [
      { label: "AI Back Office", href: "/ai-back-office" },
      { label: "Data Add-Ons", href: "/data-addons" },
      { label: "Pricing", href: "/pricing" },
      { label: "Case Study", href: "/case-studies/salty-home-services" },
    ],
  },
  {
    title: "Trades",
    links: tradeLinks,
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
