# Site structure

Salty Air sells one thing: the **AI back office for trade and home service
businesses**. Everything in the main navigation serves that. Law practices and
embedded engineering are inbound-only and live on `/other-work`, linked from the
footer but never the main nav.

| Route | Content |
|---|---|
| `/` | Home — slogan hero, trade subhead, back-office snapshot, offer teaser |
| `/ai-back-office` | The full retainer offer |
| `/pricing` | The two offers |
| `/trades/[trade]` | One page per trade, from `lib/trades.ts` |
| `/case-studies/salty-home-services` | Real proof only — no metrics |
| `/data-addons` | Apify public-data add-ons |
| `/about` | Why Romas |
| `/contact` | Inquiry form + booking |
| `/other-work` | Law + embedded engineering (footer only) |
| `/privacy`, `/terms` | Plain-language templates |

### Redirects (`next.config.mjs`)

`/business` → `/` · `/guide` → `/other-work` · `/industries/law` →
`/other-work` · `/industries/construction` → `/`

## The two hard content rules

**1. Only two offers carry a price, and only one of them has a number.**
The Business Audit is $499 (`AUDIT_CHECKOUT_URL` in `lib/site.ts`). The retainer
is *inquire only* — no monthly figure, no setup fee, no "starting at", anywhere
on the site or in the JSON-LD. Both live in `lib/offers.ts`; the layout's
`hasOfferCatalog` mirrors them and must be updated with them.

**2. No invented numbers.** There is no ROI dashboard, no response-time figure,
no close rate, and no testimonial. The case study lists what was built and
nothing about how it performed, because none of it has been measured. If a
number is not measured, it does not go on the site.

## Brand system

Tokens live in the `@theme` block of `app/globals.css`; fonts are loaded in
`app/layout.tsx`.

- **Palette** — off-white `#faf8f6`, sand `#eadcc8`, seafoam `#c0dad0`, peach
  `#f5c593`, orange `#f6a243`, burnt `#df7643`, deep teal `#2b6064`.
- **Type** — Montserrat headings, Poppins body, both via `next/font/google`.
- **Surfaces** — deep-teal grain bands (`TealBand`, `PageHero`, `CtaBand`,
  `Footer`) alternating with airy off-white and sand sections (`Section`).
- **Accent words** — peach, on teal. `Automate.` is always peach.
- **Mark** — palm + condensed SALTYAIR, `public/brand/logo-saltyair-*.png`,
  rendered through `components/brand/Logo.tsx`.

### Contrast

White on teal is 7.1:1 and teal on off-white is 6.8:1, both AA. Plain teal on
the peach fill is 4.49:1 — just under the threshold — so type on peach uses
`--color-teal-deep` (`#1f4a4e`, 6.2:1) instead. The `peach` button variant
already does this; don't put `text-primary` on a peach background.

## Adding a trade

Add an entry to `trades` in `lib/trades.ts`. The page, nav dropdown entry,
footer link, sitemap entry, and OG card all follow automatically —
`app/trades/[trade]/` is a single dynamic route with `generateStaticParams`.

## SEO

- Titles use a `%s | Salty Air` template in `app/layout.tsx` — **page titles
  must not include the suffix themselves** or it doubles up.
- **Preview builds are noindex.** `IS_PRODUCTION` in `lib/site.ts` is true only
  when `VERCEL_ENV === "production"`; anything else gets `noindex, nofollow`
  in the root metadata *and* a blanket `Disallow: /` from `app/robots.ts`.
- Structured data: `ProfessionalService` in the layout (`@id`
  `…/#organization`), `Service` + `BreadcrumbList` on each trade page, `FAQPage`
  on `/` and `/pricing` via `components/seo/FaqJsonLd.tsx`.
- Social cards are generated at build time by `lib/og.tsx`, which inlines the
  palm mark as a data URI (Satori cannot fetch a relative URL mid-render).
  **Every indexed route needs its own `opengraph-image.tsx`** — a page that
  exports its own `openGraph` metadata does not inherit the parent segment's
  image.

## Open items

- **Shared Stripe link.** The audit uses the one existing payment link. Create a
  trade-specific link if you want separate reporting.
- **No measured results yet.** When real numbers exist for a trade engagement,
  the case study is where they go — with the engagement named.
- **Trade hero photography.** Roofers and landscapers currently share
  `stock/van-job.jpg`; swap in trade-specific shots when they exist.
- **Old law URLs.** `/industries/law` and `/guide` now 308 to `/other-work`. If
  Search Console shows ranked law queries, that equity consolidates there.
