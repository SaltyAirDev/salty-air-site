# Site structure

The homepage is **business-focused**. Law is one industry page under it.

| Route | Content | Notes |
|---|---|---|
| `/` | General business | Homepage |
| `/industries/law` | Law practices | Was the homepage until the switch |
| `/guide` | Law guide article | Not linked from the nav |
| `/business` | — | 308 redirect → `/` (old preview URL) |

## Editing copy

Nothing user-facing is hard-coded in JSX. Every string lives in one of two files,
both typed against `lib/content-types.ts` so they cannot drift apart:

- `lib/content-business.ts` → `businessContent`, rendered at `/`
- `lib/content.ts` → `lawContent`, rendered at `/industries/law`

`components/SitePage.tsx` renders the whole page from one of those objects. Section
components take their slice as a `content` prop and fall back to the law copy when
none is passed.

Headlines with a coloured word are data, not markup — see `RichHeadline` and the
`headlineRich` fields (`[{ text: "Built with " }, { text: "businesses", accent: true }, …]`).

## Adding an industry

1. Add an entry to `industries` in `lib/industries.ts` — this feeds the nav dropdown
   and the footer column automatically.
2. Create `lib/content-<slug>.ts` exporting a `SiteContent` (copy `content-business.ts`).
3. Create `app/industries/<slug>/page.tsx` — copy the law page; it shows the pattern for
   metadata, JSON-LD, and injecting the Industries nav/footer entries.
4. Create `app/industries/<slug>/opengraph-image.tsx` using `ogCard` from `lib/og.tsx`.
5. The sitemap picks it up with no further work.

## SEO

- Titles use a `%s | Salty Air` template in `app/layout.tsx` — **page titles must not
  include the suffix themselves** or it doubles up.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
- Structured data: `ProfessionalService` in the layout (`@id` `…/#organization`),
  `Service` + `BreadcrumbList` on the law page, `FAQPage` on both marketing pages via
  `components/seo/FaqJsonLd.tsx`.
- Social cards are generated at build time by `lib/og.tsx`. **Every indexed route needs
  its own `opengraph-image.tsx`** — a page that exports its own `openGraph` metadata does
  not inherit the parent segment's image (this is why `/guide` initially had none).
- Offer names in the layout's JSON-LD mirror the pricing tiers in `lib/content-business.ts`;
  update both together.

## Open items

- **No mobile nav.** Every nav link is hidden below 768px — the site has no hamburger
  menu. Industries is only reachable from the footer on phones.
- **Shared Stripe links.** "Business Audit" and "AI Training Day" point at the same two
  payment links as the law tiers. Create separate links if you want per-audience reporting.
- **Contact form** (`app/api/contact/route.ts`) labels the company field "Firm:" in the
  notification email — reads oddly for non-law inquiries.
- **ROI metrics** on `/` are the law figures re-labelled. The footnote calls them example
  data; swap once non-law engagements close.
- **`/guide`** is law-specific and unlinked. Consider surfacing it from the law page.
- **Old law URLs.** `/` previously served the law content. Anyone who bookmarked or linked
  it now lands on the business page. If Search Console shows ranked law queries on `/`,
  that equity now needs to build up at `/industries/law`.
