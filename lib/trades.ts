/**
 * The trade verticals. Drives the top-level trade routes, the Industries
 * dropdown, the footer column, the sitemap, and each page's OG card.
 *
 * Each trade lives at the root — `/electricians`, `/plumbers`, `/hvac` and so
 * on — because that is how these shops search and self-describe, and because
 * burying a conversion page one segment deeper buys nothing. The old
 * `/trades/<slug>` URLs 308 to the new ones (see next.config.mjs), and adding
 * a trade here means adding `app/<slug>/` alongside it.
 *
 * General contractors are the other audience we serve from day one, but a GC's
 * stack is different enough that it gets its own hand-written page at
 * /general-contractors rather than an entry in this list. It still joins these
 * in the dropdown and the footer via `industryLinks` below.
 *
 * Copy rule: the trade line is a *supporting* subhead. The brand line
 * ("Work Less. Live More. Automate.") stays the eyebrow on every one of these
 * pages, so a trade page never reads as a separate brand. The page itself
 * leads with connecting the stack the shop already runs; the systems we set up
 * come after it.
 */

export type Trade = {
  slug: string;
  /** Shown in the nav dropdown and footer — the trade name alone. */
  label: string;
  /** <title> for the page. Must not include the "| Salty Air" suffix. */
  title: string;
  description: string;
  /** Page H1, with the final word set in peach. */
  headline: string;
  headlineAccent: string;
  sub: string;
  /** Hero photograph from public/brand. */
  image: string;
  imageAlt: string;
  /** The specific ways this trade loses work. No numbers — nothing measured. */
  leaks: string[];
  /** What the back office does about it, in this trade's language. */
  built: Array<{ title: string; desc: string }>;
};

export const trades: Trade[] = [
  {
    slug: "electricians",
    label: "Electricians",
    title: "Software Integration for Electrical Contractors",
    description:
      "Housecall Pro, Jobber, ServiceTitan and QuickBooks, connected. Integrations for electrical contractors. Start with a $499 Integration Audit.",
    headline: "The panel upgrade call you missed is already someone else's",
    headlineAccent: "job.",
    sub: "You're in a crawlspace with your hands full. The phone rings, goes to voicemail, and the homeowner calls the next electrician on the list. That's the whole problem, and it's fixable.",
    image: "/brand/stock/electrician.jpg",
    imageAlt: "Electrician working on a residential panel",
    leaks: [
      "Service calls land while you're in an attic, a panel, or under a house — and voicemail does not book work",
      "Panel and EV-charger estimates go out and then sit, because chasing them is nobody's job",
      "Permit and inspection back-and-forth eats the evenings you meant to spend quoting",
      "Happy customers never get asked for the review that would have won you the next three calls",
    ],
    built: [
      {
        title: "Missed calls text back",
        desc: "The homeowner gets a reply before they've dialled the next shop, with a link to book.",
      },
      {
        title: "AI answering for after-hours",
        desc: "Takes the address, the panel, and whether it's an emergency, so you triage in the morning instead of guessing from a voicemail.",
      },
      {
        title: "Estimates that follow themselves up",
        desc: "Every quote gets chased on a schedule until it's won, lost, or answered.",
      },
      {
        title: "Jobs flow into your dispatch system",
        desc: "Housecall Pro or Jobber, populated from the web form and the phone, with the job details already filled in.",
      },
    ],
  },
  {
    slug: "plumbers",
    label: "Plumbers",
    title: "Software Integration for Plumbing Companies",
    description:
      "Connect your scheduling, phones and QuickBooks so a plumbing job gets entered once. Integrations for plumbing companies. $499 Integration Audit.",
    headline: "Emergency calls don't wait for you to get back to the",
    headlineAccent: "truck.",
    sub: "A burst line is the one call a homeowner will absolutely make twice — to you, and to whoever answers first. Make sure that's you, even when both your hands are on a wrench.",
    image: "/brand/stock/plumber-tools.jpg",
    imageAlt: "Plumbing tools laid out on a work surface",
    leaks: [
      "Emergency calls come in while you're already under a sink, and the second call goes to whoever picks up",
      "After-hours calls reach voicemail, which is the same as reaching a competitor",
      "Repipe and water-heater quotes go quiet and nobody follows up",
      "Repeat customers never get a reason to call you first next time",
    ],
    built: [
      {
        title: "Missed calls text back",
        desc: "Instant reply with a booking link, so the emergency stays yours.",
      },
      {
        title: "AI answering around the clock",
        desc: "Captures what's leaking, where, and how bad — and flags the real emergencies.",
      },
      {
        title: "Quotes get chased",
        desc: "Water heaters and repipes stop going quiet after the estimate goes out.",
      },
      {
        title: "Reviews on closed jobs",
        desc: "The ask goes out while the customer still has dry floors and a working heater.",
      },
    ],
  },
  {
    slug: "hvac",
    label: "HVAC",
    title: "Software Integration for HVAC Companies",
    description:
      "Maintenance plans, scheduling and QuickBooks that stay in sync. Systems integration for HVAC companies. Start with a $499 Integration Audit.",
    headline: "The first heat wave books out whoever answers the phone",
    headlineAccent: "first.",
    sub: "Your season is decided in a handful of weeks. When every call matters most is exactly when your crews are too busy to pick up.",
    image: "/brand/stock/hvac.jpg",
    imageAlt: "HVAC condenser units outside a building",
    leaks: [
      "The season turns and the call volume arrives all at once, with no one free to answer",
      "System-replacement quotes are the biggest tickets you write and the easiest to let go cold",
      "Maintenance plan renewals depend on someone remembering to reach out",
      "Tune-up season starts late because the outreach never got scheduled",
    ],
    built: [
      {
        title: "Missed calls text back",
        desc: "Peak-season overflow gets an instant reply and a booking link instead of a full voicemail box.",
      },
      {
        title: "AI answering that triages",
        desc: "No-heat and no-cool calls get flagged ahead of routine service.",
      },
      {
        title: "Replacement quotes followed up",
        desc: "Your largest estimates get a real follow-up sequence, not a sticky note.",
      },
      {
        title: "Maintenance and tune-up outreach",
        desc: "Renewals and seasonal tune-ups go out on schedule, from your customer list.",
      },
    ],
  },
  {
    slug: "handyman",
    label: "Handyman",
    title: "Software Integration for Handyman Businesses",
    description:
      "Calls, quotes and scheduling in one place instead of six text threads. Systems integration for handyman businesses. $499 Integration Audit.",
    headline: "You are the crew, the dispatcher, and the office",
    headlineAccent: "manager.",
    sub: "Small jobs, lots of them, and every one needs a call, a quote, and a follow-up. The admin is the bottleneck, and it's all landing on you.",
    image: "/brand/stock/van-job.jpg",
    imageAlt: "Work van parked at a residential job site",
    leaks: [
      "You are on a job all day, so the phone goes unanswered all day",
      "Small jobs still need quoting, and the quotes pile up for the evening",
      "Scheduling happens by text thread, which means it happens twice",
      "Good work goes unreviewed because asking feels awkward and takes time",
    ],
    built: [
      {
        title: "Missed calls text back",
        desc: "Every call you can't take gets a reply and a way to book, without you stopping work.",
      },
      {
        title: "AI answering takes the details",
        desc: "What the job is, where it is, and when they want it — ready for you to price.",
      },
      {
        title: "One place for the schedule",
        desc: "Jobs land in Housecall Pro or Jobber instead of across six text threads.",
      },
      {
        title: "Follow-up and reviews run themselves",
        desc: "Quotes get chased and finished jobs get the review ask, automatically.",
      },
    ],
  },
  {
    slug: "roofers",
    label: "Roofers",
    title: "Software Integration for Roofing Companies",
    description:
      "Storm-season calls, bids and QuickBooks that keep up with the crews. Systems integration for roofing companies. $499 Integration Audit.",
    headline: "After a storm, the only roofer who matters is the one who picks",
    headlineAccent: "up.",
    sub: "Storm work arrives in a flood and leaves just as fast. If the calls stack up in voicemail, the season moves to the next company on the list.",
    image: "/brand/stock/van-job.jpg",
    imageAlt: "Contractor van at a residential job site",
    leaks: [
      "Storm demand spikes faster than anyone can answer the phone",
      "Inspection requests come in all day while every crew is on a roof",
      "Big-ticket replacement bids go out and then go quiet for weeks",
      "Insurance paperwork swallows the time you'd spend chasing the bid",
    ],
    built: [
      {
        title: "Missed calls text back",
        desc: "Storm-season callers get an immediate reply and a slot for an inspection.",
      },
      {
        title: "AI answering for the surge",
        desc: "Takes the address, the damage, and whether there's an active leak.",
      },
      {
        title: "Bids followed up properly",
        desc: "Replacement bids get a sequence, because a roof is not an impulse buy.",
      },
      {
        title: "Inspections on the calendar",
        desc: "Requests become booked appointments in the system your crews already run.",
      },
    ],
  },
  {
    slug: "landscapers",
    label: "Landscapers",
    title: "Software Integration for Landscaping Companies",
    description:
      "Spring signups, renewals and bids that follow themselves up. Systems integration for landscaping companies. $499 Integration Audit to start.",
    headline: "Spring signups decide the whole year, and they all come in at",
    headlineAccent: "once.",
    sub: "Maintenance contracts, cleanups, and install bids all land in the same few weeks — while your crews are already out and the phone is ringing in an empty office.",
    image: "/brand/stock/van-job.jpg",
    imageAlt: "Work van parked at a property job site",
    leaks: [
      "Spring signups arrive in a rush your office can't answer",
      "Maintenance renewals depend on remembering to call every existing customer",
      "Install and hardscape bids go out and sit without a follow-up",
      "Seasonal work ends without ever asking for the review",
    ],
    built: [
      {
        title: "Missed calls text back",
        desc: "Spring callers get an instant reply and a way to book the walkthrough.",
      },
      {
        title: "AI answering during the rush",
        desc: "Captures the property, the scope, and whether it's maintenance or install.",
      },
      {
        title: "Renewal outreach",
        desc: "Existing maintenance customers get contacted before the season starts, not after.",
      },
      {
        title: "Bids and reviews handled",
        desc: "Install bids get chased; finished jobs get the review request.",
      },
    ],
  },
];

/** Trade pages sit at the root; `/trades/<slug>` 308s here. */
export const tradeHref = (slug: string) => `/${slug}`;

export const getTrade = (slug: string) => trades.find((t) => t.slug === slug);

/**
 * Same lookup, for the top-level route files that are written against a known
 * slug. Throws during the build rather than rendering a page without content,
 * so a renamed slug fails loudly instead of quietly 404ing in production.
 */
export const requireTrade = (slug: string): Trade => {
  const trade = getTrade(slug);
  if (!trade) throw new Error(`Unknown trade slug: ${slug}`);
  return trade;
};

/** Nav dropdown / footer column entries — trade name only, no "AI for…" prefix. */
export const tradeLinks = trades.map((t) => ({
  label: t.label,
  href: tradeHref(t.slug),
}));

/**
 * The GC / specialty-sub page. Hand-written, so it is a route not a registry
 * entry.
 *
 * `/general-contractors` rather than `/construction`: the category word invites
 * every visitor in the industry, including the trades that have their own pages
 * already, and it reads like a topic instead of a buyer. `/construction` and
 * `/industries/construction` both 308 here.
 */
export const GC_PATH = "/general-contractors";
export const GC_LABEL = "General Contractors";

/**
 * Everything in the Industries dropdown and the footer's Industries column:
 * the six trades, then general contractors. Both audiences from day one.
 */
export const industryLinks = [...tradeLinks, { label: GC_LABEL, href: GC_PATH }];
