/**
 * Registry of industry-specific pages. Drives the "Industries" nav dropdown and
 * the industries footer column. Add an entry here plus a page under
 * `app/industries/<slug>/page.tsx` to ship a new vertical.
 */
import type { NavLink } from "./content-types";

export type Industry = {
  slug: string;
  label: string;
  /** One-line description shown in the nav dropdown. */
  desc: string;
};

export const industries: Industry[] = [
  {
    slug: "law",
    label: "Law Practices",
    desc: "Intake, drafting, matter & billing ops",
  },
];

export const industryHref = (slug: string) => `/industries/${slug}`;

/** The "Industries" entry for a nav bar, with one child per industry. */
export const industriesNavLink: NavLink = {
  label: "Industries",
  href: industryHref(industries[0].slug),
  children: industries.map((i) => ({
    label: i.label,
    href: industryHref(i.slug),
    desc: i.desc,
  })),
};
