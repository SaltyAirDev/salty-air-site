# Site structure

Salty Air is a **forward-deployed engineering and integrations shop**. We embed
with a business, connect the systems it already pays for, set up what is
missing, and build custom where nothing fits. Two audiences from day one:
trades / home services, and construction GCs and specialty subs. Law practices
and enterprise engineering teams are inbound-only and live on `/other-work`,
linked from the footer but never the main nav.

| Route | Content |
|---|---|
| `/` | Home — "We connect the systems you already pay for", the two offers, the stack, both audiences, SHS, the ladder |
| `/integrations` | The primary offer: connect / set up / build, the systems, how a project runs |
| `/embedded` | The ongoing engagement: what embedding means, first 30/60/90 days |
| `/pricing` | The ladder — audit, build, embedded. One price. |
| `/construction` | GCs and specialty subs — plan rooms, estimating, RFIs, change orders, job cost, sub compliance |
| `/trades/[trade]` | One page per trade, from `lib/trades.ts` |
| `/case-studies/salty-home-services` | Our own home services company. Facts only — no metrics |
| `/about` | About Salty Air / how we work — company page, no founder bio |
| `/contact` | Inquiry form + booking |
| `/other-work` | Law + enterprise engineering (footer only) |
| `/privacy`, `/terms` | Plain-language templates |

### Redirects (`next.config.mjs`)

`/business` → `/` · `/guide` → `/other-work` · `/industries/law` →
`/other-work` · `/industries/construction` → `/construction` ·
`/fractional-cto` → `/embedded` · `/ai-back-office` → `/embedded` ·
`/data-addons` → `/integrations`

## The three hard content rules

**1. One published price, and it is the audit.**
The Business & Integration Audit is $499 (`AUDIT_CHECKOUT_URL` in
`lib/site.ts`). Everything else — the integration build and the embedded
engagement — prints `QUOTED_AFTER_AUDIT` where a price would go. No ranges, no
"starting at", no monthly bands, no package prices, anywhere on the site or in
the JSON-LD. All of it lives in `lib/offers.ts`; the layout's `hasOfferCatalog`
mirrors the three offers and must be updated with them, with a `price` on the
audit only.

Verify with:

```sh
grep -RInE '\$[0-9]|starting at|\/mo|per month' --include='*.tsx' --include='*.ts' --include='*.md' app components lib
```

Every hit should be `$499`, or copy that explicitly rules a price out.

**2. No invented numbers.** There is no ROI dashboard, no response-time figure,
no close rate, and no testimonial. The case study lists what was built and
nothing about how it performed, because none of it has been measured. If a
number is not measured, it does not go on the site.

**3. Company voice, always "we".** No founder bio, no named operator, no
degrees, no "built it himself", no personal shops as proof. `/about` is a
company page about how engagements work. Salty Home Services is framed as *our
own* home services company. The one exception is the notification address in
`app/api/contact/route.ts`, which is an inbox, not copy.

## Content model

- `lib/site.ts` — origin, slogan, hero line, positioning, the audit, the
  checkout and calendar links, `QUOTED_AFTER_AUDIT`.
- `lib/systems.ts` — the stacks we connect (`systemGroups`), the three modes
  (`integrationModes`), and the symptoms owners recognise (`commonSeams`).
  Drives `/integrations`, the homepage stack band, `/construction`, and the
  JSON-LD `knowsAbout`.
- `lib/offers.ts` — the three-rung ladder, the two `pillars` the homepage and
  `/pricing` lead with, and `backOfficeSystems` (the trade-page back office).
- `lib/nav.ts` — main nav, footer columns, legal links.
- `lib/trades.ts` — the six trades, plus `CONSTRUCTION_PATH` and
  `industryLinks` (trades + construction) for the dropdown and footer.

Prefer editing these over writing one-off page content.

## Brand system

Tokens live in the `@theme` block of `app/globals.css`; the font is loaded in
`app/layout.tsx`.

- **Palette** — off-white `#faf8f6`, sand `#eadcc8`, seafoam `#c0dad0`, peach
  `#f5c593`, orange `#f6a243`, burnt `#df7643`, deep teal `#2b6064`.
- **Type** — **Montserrat site-wide**, headings and body both, loaded once as
  `--font-montserrat` and aliased to `--font-heading` and `--font-sans`.
  Poppins is gone; do not reintroduce a second family.
- **Surfaces** — deep-teal grain bands (`TealBand`, `PageHero`, `CtaBand`,
  `Footer`) alternating with airy off-white and sand sections (`Section`).
- **Accent words** — peach, on teal. `Automate.` is always peach.
- **Mark** — palm + condensed SALTYAIR, `public/brand/logo-saltyair-*.png`,
  rendered through `components/brand/Logo.tsx`.
- **Slogan** — "Work Less. Live More. Automate." is the eyebrow on the trade
  and construction pages, the headline of the CTA band, and the footer line. It
  is deliberately **not** the homepage hero: the front door sells the
  capability.

### Contrast

White on teal is 7.1:1 and teal on off-white is 6.8:1, both AA. Plain teal on
the peach fill is 4.49:1 — just under the threshold — so type on peach uses
`--color-teal-deep` (`#1f4a4e`, 6.2:1) instead. The `peach` button variant
already does this; don't put `text-primary` on a peach background.

## Adding a trade

Add an entry to `trades` in `lib/trades.ts`. The page, nav dropdown entry,
footer link, sitemap entry, and OG card all follow automatically —
`app/trades/[trade]/` is a single dynamic route with `generateStaticParams`.
Construction is deliberately *not* in that registry: a GC's stack is a
different shape, so `/construction` is a hand-written page that joins the
dropdown and footer through `industryLinks`.

## Adding a system we connect

Add it to the right group in `systemGroups` (`lib/systems.ts`). It appears in
the chip rows, the `/integrations` breakdown, and the organisation JSON-LD. No
logos — plain type only, so nothing implies a partnership we don't have.

## SEO

- Titles use a `%s | Salty Air` template in `app/layout.tsx` — **page titles
  must not include the suffix themselves** or it doubles up.
- **Preview builds are noindex.** `IS_PRODUCTION` in `lib/site.ts` is true only
  when `VERCEL_ENV === "production"`; anything else gets `noindex, nofollow`
  in the root metadata *and* a blanket `Disallow: /` from `app/robots.ts`.
- Structured data: `ProfessionalService` in the layout (`@id`
  `…/#organization`), `Service` + `BreadcrumbList` on `/integrations`,
  `/embedded`, `/construction`, and each trade page, `FAQPage` on `/`,
  `/integrations`, `/embedded`, `/construction`, and `/pricing` via
  `components/seo/FaqJsonLd.tsx`.
- Social cards are generated at build time by `lib/og.tsx`, which inlines the
  palm mark as a data URI (Satori cannot fetch a relative URL mid-render).
  **Every indexed route needs its own `opengraph-image.tsx`** — a page that
  exports its own `openGraph` metadata does not inherit the parent segment's
  image.

## Open items

- **Shared Stripe link.** The audit uses the one existing payment link. Create
  an industry-specific link if you want separate reporting.
- **No measured results yet.** When real numbers exist for an engagement, the
  case study is where they go — with the engagement named.
- **Old offer URLs.** `/fractional-cto` and `/ai-back-office` both 308 to
  `/embedded`, and `/data-addons` 308s to `/integrations`. The "AI back office"
  phrasing still earns search traffic, so it stays in trade page titles and
  body copy — it is just no longer the top-line positioning.
- **Data work is not an offer.** It is one of the things an integration project
  can produce (reporting, a warehouse), and it is listed that way in
  `systemGroups`. It is not in the nav, not in the footer's offer column, and
  has no page of its own.
- **Old law URLs.** `/industries/law` and `/guide` 308 to `/other-work`.
- **Trade hero photography.** Roofers, landscapers, and `/construction`
  currently share `stock/van-job.jpg`; swap in specific shots when they exist.
