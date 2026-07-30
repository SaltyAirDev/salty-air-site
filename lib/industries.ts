/**
 * Registry of industry-specific pages. Drives the "Industries" nav dropdown,
 * the industries footer column, and the sitemap. Add an entry here plus a page
 * under `app/industries/<slug>/page.tsx` to ship a new vertical.
 */
import type { Link, NavLink } from "./content-types";
import type { SiteContent } from "./content";

export type Industry = {
  slug: string;
  label: string;
};

export const industries: Industry[] = [
  {
    slug: "law",
    label: "Law Practices",
  },
  {
    slug: "construction",
    label: "Construction",
  },
];

export const industryHref = (slug: string) => `/industries/${slug}`;

export const industryLinks: Link[] = industries.map((i) => ({
  label: i.label,
  href: industryHref(i.slug),
}));

/** The "Industries" entry for a nav bar, with one child per industry. */
export const industriesNavLink: NavLink = {
  label: "Industries",
  href: industryHref(industries[0].slug),
  children: industryLinks,
};

/**
 * Footer column for industry pages. Includes a route back to the general
 * business homepage, which the homepage's own column omits as redundant.
 */
export const industriesFooterColumn = {
  title: "Industries",
  links: [{ label: "All businesses", href: "/" }, ...industryLinks],
};

/**
 * Adds the Industries nav dropdown and footer column to an industry variant, so
 * visitors can move between verticals and back to the main site. The vertical's
 * own copy is untouched.
 */
export function withIndustryChrome(content: SiteContent): SiteContent {
  return {
    ...content,
    nav: {
      ...content.nav,
      links: [content.nav.links[0], industriesNavLink, ...content.nav.links.slice(1)],
    },
    footer: {
      ...content.footer,
      columns: [
        content.footer.columns[0],
        industriesFooterColumn,
        ...content.footer.columns.slice(1),
      ],
    },
  };
}
