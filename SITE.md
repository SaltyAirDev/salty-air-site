# Site structure

Salty Air is an **integrations and embedded engineering shop**. We get into a
business, connect the systems it already pays for, set up what was bought and
never turned on, and build custom where nothing fits. Two audiences from day
one: trades / home services, and construction GCs and specialty subs. Law
practices and enterprise engineering teams are inbound-only and live on
`/other-work`, linked from the footer but never the main nav.

**Public copy never says** "FDE", "forward-deployed engineer", or "fractional
CTO" — plain trade and construction language only. The old `/fractional-cto`
URL still redirects; the framing does not survive the move.

| Route | Content |
|---|---|
| `/` | Home — "We connect the systems you already pay for", the three value pillars, the two offers, the stack, both audiences, SHS, the ladder |
| `/audit` | **The conversion target.** The $499 Integration Audit: deliverables, how it works, who it's for, what happens after, FAQ. Book a call *or* pay via Stripe |
| `/integrations` | The primary offer page: the three value pillars, connect / set up / build, the systems, how a project runs |
| `/embedded` | The ongoing engagement: what embedding means, first 30/60/90 days |
| `/pricing` | The ladder — audit, build, embedded. One price. Not in the main nav |
| `/general-contractors` | GCs and specialty subs — plan rooms, estimating, RFIs, change orders, job cost, sub compliance |
| `/electricians`, `/plumbers`, `/hvac`, `/handyman`, `/roofers`, `/landscapers` | One top-level page per trade, all from `lib/trades.ts` via `components/site/TradePage.tsx` |
| `/case-studies/salty-home-services` | Our own home services company. Facts only — no metrics |
| `/about` | About Salty Air / how we work — company page, no founder bio |
| `/contact` | Inquiry form + booking |
| `/other-work` | Law + enterprise engineering (footer only) |
| `/privacy`, `/terms` | Plain-language templates |

### Redirects (`next.config.mjs`)

`/business` → `/` · `/guide` → `/other-work` · `/industries/law` →
`/other-work` · `/construction` → `/general-contractors` ·
`/industries/construction` → `/general-contractors` · `/trades/<slug>` →
`/<slug>` (every trade) · `/trades` → `/` · `/fractional-cto` → `/embedded` ·
`/ai-back-office` → `/embedded` · `/data-addons` → `/integrations`

`TRADE_SLUGS` in `next.config.mjs` mirrors `trades` in `lib/trades.ts` by hand
— the config cannot import the TypeScript module. Add a trade in one place and
add its slug in the other.

### The conversion path

Every primary CTA on the site points at **`/audit`** — the nav button, the
heroes, the CTA band default, and the audit offer card. `/audit` is the only
page that links to `AUDIT_CHECKOUT_URL`, so a visitor meets the scope, the
turnaround, and the fit questions before paying. Book-a-call
(`CALENDAR_URL`) stays available everywhere alongside it, and `/contact` keeps
the form.

## The three hard content rules

**1. One published price, and it is the audit.**
The **Integration Audit** is $499 — one name site-wide, because the name states
the deliverable (`AUDIT_NAME`, `AUDIT_PRICE`, `AUDIT_OFFER`, `AUDIT_PATH`,
`AUDIT_CHECKOUT_URL` in `lib/site.ts`). Everything else — the integration build
and the embedded engagement — prints `QUOTED_AFTER_AUDIT` where a price would
go. The work after the audit is quoted in the audit document, never on a page:
no ranges, no "starting at", no monthly bands, no package prices, not even a
"ballpark", anywhere on the site or in the JSON-LD. All of it lives in
`lib/offers.ts`; the layout's `hasOfferCatalog` mirrors the three offers and
must be updated with them, with a `price` on the audit only.

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

- `lib/site.ts` — origin, slogan, hero line, positioning, the audit (name,
  price, path, session length, turnaround), the `AUDIT_CTA` / `CALL_CTA` pair,
  the checkout and calendar links, `QUOTED_AFTER_AUDIT`.
- `lib/systems.ts` — the stacks we connect (`systemGroups`), the three modes
  (`integrationModes`), and the symptoms owners recognise (`commonSeams`).
  Drives `/integrations`, the homepage stack band, `/general-contractors`, and
  the JSON-LD `knowsAbout`.
- `lib/offers.ts` — the three-rung ladder (`offers`), the three `valuePillars`
  (connect what you already bought · embed don't advise · build the missing
  piece) rendered by `ValuePillars` on `/` and `/integrations`, the two
  `offerCards` rendered by `OfferSplit`, and `backOfficeSystems` (the
  trade-page back office). **`valuePillars` and `offerCards` are different
  things** — the pitch and the packaging — and the component names say so.
- `lib/nav.ts` — main nav, footer columns, legal links.
- `lib/trades.ts` — the six trades (each at a top-level route), plus `GC_PATH`,
  `GC_LABEL`, and `industryLinks` (trades + general contractors) for the
  dropdown and footer.

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
  `PageHero` fills its right half with either `image` (a photograph, as on `/`)
  or `aside` (a translucent card on the band, as on `/audit`) — one or the
  other, never both. Both drop below the copy on mobile.
- **Accent words** — peach, on teal. `Automate.` is always peach.
- **Mark** — palm + condensed SALTYAIR, `public/brand/logo-saltyair-*.png`,
  rendered through `components/brand/Logo.tsx`.
- **Slogan** — "Work Less. Live More. Automate." is the eyebrow on the trade
  and GC pages, the headline of the CTA band, and the footer line. It is
  deliberately **not** the hero of the homepage or `/audit`: the front door and
  the conversion page both sell the capability, not the mood.

### Contrast

White on teal is 7.1:1 and teal on off-white is 6.8:1, both AA. Plain teal on
the peach fill is 4.49:1 — just under the threshold — so type on peach uses
`--color-teal-deep` (`#1f4a4e`, 6.2:1) instead. The `peach` button variant
already does this; don't put `text-primary` on a peach background.

## Adding a trade

1. Add an entry to `trades` in `lib/trades.ts` — that gives you the nav
   dropdown entry, the footer link, the sitemap entry, and the cross-links on
   every other trade page.
2. Add `app/<slug>/page.tsx` and `app/<slug>/opengraph-image.tsx`, copied from
   any existing trade (four lines each; the page body is
   `components/site/TradePage.tsx`).
3. Add the slug to `TRADE_SLUGS` in `next.config.mjs`.

Trade pages sit at the **root**, not under `/trades`, because that is how these
shops search and self-describe. They are six static routes rather than one
root-level `[trade]` segment, which would shadow every other URL on the site.
`requireTrade` throws during the build if a route file names a slug that is not
in the registry.

General contractors are deliberately *not* in that registry: a GC's stack is a
different shape, so `/general-contractors` is a hand-written page that joins the
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
  `…/#organization`), `Service` + `BreadcrumbList` on `/audit`,
  `/integrations`, `/embedded`, `/general-contractors`, and each trade page —
  with an `Offer` (499 USD, InStock) on `/audit` and in the layout's
  `hasOfferCatalog` — and `FAQPage` on `/`, `/audit`, `/integrations`,
  `/embedded`, `/general-contractors`, and `/pricing` via
  `components/seo/FaqJsonLd.tsx`. FAQ schema must match the on-page FAQ word
  for word; both come from the same `faqItems` array, so keep it that way. No
  `Review` or `AggregateRating` anywhere.
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
  `/embedded`, and `/data-addons` 308s to `/integrations`. Trade page titles
  now lead with "Software Integration for …" per the page briefs; the "AI back
  office" phrasing stays in trade page *body* copy, where it describes what a
  connected stack ends up doing, but it is no longer a title or the top-line
  positioning.
- **Data work is not an offer.** It is one of the things an integration project
  can produce (reporting, a warehouse), and it is listed that way in
  `systemGroups`. It is not in the nav, not in the footer's offer column, and
  has no page of its own.
- **Old law URLs.** `/industries/law` and `/guide` 308 to `/other-work`.
- **Trade hero photography.** Roofers, landscapers, and
  `/general-contractors` currently share `stock/van-job.jpg`; swap in specific
  shots when they exist.
- **The audit credit is on the page.** `/audit` now states it in two places —
  "What happens after" and the FAQ: sign for a build or a retainer within 14
  days of the findings and the $499 comes off it. The 14-day window and the
  "within 14 days *of the findings*" anchor need confirming against whatever
  goes in the engagement letter; the page is the only place it is written down
  today.
- **`/terms` "Ownership & IP" is pending confirmation.** The section is live —
  client owns the paid-for deliverables, Salty Air retains its pre-existing and
  reusable tooling and licenses it onward — but the language has **not** been
  signed off. There is a `PENDING CONFIRMATION` comment on it in
  `app/terms/page.tsx`. Until it is confirmed it stays off `/audit`, which is
  why the ownership question is still absent from that page's FAQ.
- **No Meta Pixel or CAPI yet.** The audit spec requires both, deduplicated and
  verified in Events Manager, before `/audit` takes paid traffic. GA4 is the
  only analytics on the site today.
