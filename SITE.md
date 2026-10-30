# Site structure

Salty Air sells one thing: a **fractional CTO and operations partner** for trade
and home service businesses. We embed in the business, then build and run its
systems — the AI back office is what the engagement produces, not the product.
Everything in the main navigation serves that. Law practices and embedded
engineering are inbound-only and live on `/other-work`, linked from the footer
but never the main nav.

| Route | Content |
|---|---|
| `/` | Home — slogan hero, positioning subhead, embed/build/run, offer ladder |
| `/fractional-cto` | The engagement: what embedded (FDE) means, first 30/60/90 days |
| `/pricing` | The offer ladder — audit, retainer, add-ons |
| `/trades/[trade]` | One page per trade, from `lib/trades.ts` |
| `/case-studies/salty-home-services` | Real proof only — no metrics |
| `/data-addons` | Data services: Local Leads + Reddit lead finder |
| `/about` | About Salty Air / how we work — company page, no founder bio |
| `/contact` | Inquiry form + booking |
| `/other-work` | Law + embedded engineering (footer only) |
| `/privacy`, `/terms` | Plain-language templates |

### Redirects (`next.config.mjs`)

`/business` → `/` · `/guide` → `/other-work` · `/industries/law` →
`/other-work` · `/industries/construction` → `/` · `/ai-back-office` →
`/fractional-cto`

## The three hard content rules

**1. One published price, and it is the audit.**
The Business Audit is $499 (`AUDIT_CHECKOUT_URL` in `lib/site.ts`). The
Fractional CTO & Ops Retainer — the headline offer — is *Inquire Only*, and the
add-ons (back office systems, data services) carry no figure at all: no monthly
band, no setup fee, no "starting at", no package prices, anywhere on the site or
in the JSON-LD. All of it lives in `lib/offers.ts`; the layout's
`hasOfferCatalog` mirrors the audit and the retainer and must be updated with
them.

**2. No invented numbers.** There is no ROI dashboard, no response-time figure,
no close rate, and no testimonial. The case study lists what was built and
nothing about how it performed, because none of it has been measured. If a
number is not measured, it does not go on the site.

**3. Company voice, always "we".** No founder bio, no named operator, no
degrees, no "built it himself", no personal shops as proof. `/about` is a
company page about how engagements work. The one exception is code comments and
`public/brand/IMAGE-SOURCES.md`, which credit the source deck.

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
- **`/data-addons` keeps its slug.** The page is "Data Services" now; the route
  was left alone because the old one carries the inbound links. Rename it with a
  redirect if that ever stops being true.
- **Trade hero photography.** Roofers and landscapers currently share
  `stock/van-job.jpg`; swap in trade-specific shots when they exist.
- **Old law URLs.** `/industries/law` and `/guide` now 308 to `/other-work`. If
  Search Console shows ranked law queries, that equity consolidates there.
- **Old back-office URL.** `/ai-back-office` 308s to `/fractional-cto`. The
  "AI back office" phrasing still earns search traffic, so it stays in trade
  page titles and body copy — it is just no longer the top-line positioning.
