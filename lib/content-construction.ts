/**
 * Construction copy, aimed at general contractors and design-build firms.
 * Same shape as `lib/content.ts`; see `lib/content-types.ts` for the contract.
 */
import type {
  FaqContent,
  FinalCtaContent,
  FooterContent,
  HeroContent,
  NavContent,
  PricingContent,
  ProcessContent,
  RoiContent,
  SocialContent,
  SolutionsContent,
  TrustContent,
} from "./content-types";
import type { SiteContent } from "./content";

export const nav: NavContent = {
  brand: "Salty Air",
  links: [
    { label: "Solutions", href: "#solutions" },
    { label: "Outcomes", href: "#roi" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get Started", href: "#contact" },
};

export const hero: HeroContent = {
  eyebrow: "Work Less. Live More. Automate.",
  headline: "Project delivery,",
  headlineAccent: "automated.",
  sub: "Bespoke AI workflows for general contractors: bid and preconstruction, RFIs and submittals, change orders, and closeout, automated end-to-end.",
  trust: "Built on top of the PM system you already run — nothing gets ripped out mid-project.",
  primaryCta: { label: "Get Started", href: "#contact" },
};

export const tools: string[] = [
  "Procore",
  "Buildertrend",
  "Autodesk Build",
  "Bluebeam",
  "Sage 300 CRE",
  "QuickBooks",
  "DocuSign",
  "Claude Code",
  "OpenAI",
  "Slack",
  "Gmail",
];

export const solutions: SolutionsContent = {
  eyebrow: "What we build",
  headline: "Built with contractors in mind.",
  headlineRich: [
    [{ text: "Built with " }, { text: "contractors", accent: true }, { text: " in mind." }],
  ],
  sub: "Systems we've built so jobs run without the owner living in the truck.",
  ctaLabel: "Get Started Today",
  categories: [
    {
      title: "Bid & Preconstruction",
      desc: "Invitation-to-bid blasts, sub coverage tracking by scope, and gap checks against the drawings — so you know where you're thin before bid day, not after.",
    },
    {
      title: "RFIs & Submittals",
      desc: "RFIs drafted from field photos and notes, submittals routed to the right reviewer, and anything sitting past its ball-in-court date chased automatically.",
    },
    {
      title: "Change Orders",
      desc: "Field conditions turned into priced change orders with the backup attached and routed for signature — before the work gets buried and the argument starts.",
    },
    {
      title: "Daily Reports & Closeout",
      desc: "Daily logs assembled from field texts and photos, punch lists tracked to signoff, and O&M manuals compiled as the job wraps instead of after it.",
    },
    {
      title: "Subcontractor & Compliance Ops",
      desc: "COI expirations, lien waivers, and prequal packets chased on schedule so pay applications don't stall on missing paperwork.",
    },
    {
      title: "Bespoke Automations",
      desc: "Have a workflow that doesn't fit a category? We build bespoke AI automations and one-off projects scoped to how your jobs actually run.",
    },
  ],
};

export const trust: TrustContent = {
  headline: "Built for general contractors.",
  link: { label: "See what we build →", href: "#solutions" },
};

export const roi: RoiContent = {
  eyebrow: "Outcomes",
  headline: "More time building. Less chasing paper.",
  headlineRich: [
    [{ text: "More time building." }],
    [{ text: "Less " }, { text: "chasing paper", accent: true }, { text: "." }],
  ],
  sub: "Contractors we work with reclaim 15–25 hours per project manager each week and cut change-order turnaround by more than half.",
  dashboardLabel: "Project Dashboard · Live",
  footnote:
    "* Example data from a client engagement. Results vary by project size, delivery method, and workflow complexity.",
  ctaLabel: "Let's Talk",
  metrics: [
    { label: "RFI turnaround", value: "1.4 days", trend: "−68%", desc: "Time from field question to answered RFI" },
    { label: "Changes priced", value: "94%", trend: "+31 pts", desc: "Field changes captured and priced before work proceeds" },
    { label: "Hours reclaimed", value: "20/wk", trend: "—", desc: "Admin hours freed per project manager, per week" },
    { label: "Closeout velocity", value: "2.1×", trend: "+110%", desc: "Speed from substantial completion to final closeout" },
  ],
};

export const process: ProcessContent = {
  eyebrow: "How we work",
  headline: "From first call to fully automated.",
  headlineRich: [
    [{ text: "From first call to fully " }, { text: "automated.", accent: true }],
  ],
  sub: "A six-step engagement we've refined to fit how contractors actually adopt new tooling — measured, documented, and reversible at every stage.",
  steps: [
    {
      title: "Project Audit",
      desc: "Quick-fit check to confirm we can deliver meaningful results for your job mix, PM system, and team size.",
    },
    {
      title: "Discovery",
      desc: "60-minute blueprint call to map your goals, current tools, and the highest-ROI workflows to automate first.",
    },
    {
      title: "Workflow Design",
      desc: "We design AI agents that handle the work end-to-end, slotting into the systems your team already uses (with no impact on active jobs until we have your approval).",
    },
    {
      title: "Deploy",
      desc: "Workflows go live inside your existing stack, piloted on one job first and fully documented for your PMs and office staff.",
    },
    {
      title: "Scale & Optimize",
      desc: "Rolled out across the rest of your jobs, or a clean hand-off to your team so the automations keep paying dividends as you take on more work.",
    },
    {
      title: "Support",
      desc: "We stay close to your team for future design and development needs as new bottlenecks surface.",
    },
  ],
};

export const pricing: PricingContent = {
  eyebrow: "Engagements",
  headline: "Start with a $499 audit.",
  sub: "Low-commitment entry point to find exactly where your jobs are losing hours, then we build it out.",
  tiers: [
    {
      title: "Project Audit",
      price: "$499",
      period: "One-time · delivered in 5 business days",
      desc: "A focused audit of how your projects actually run. We find where the hours are going, identify the highest-ROI automations, and hand you a written report you can act on immediately.",
      highlight: true,
      ctaType: "checkout",
      cta: { label: "Book your audit", href: "https://buy.stripe.com/4gM5kC9zj2RCcpCa9fd7q0b" },
      note: "Fee applied toward any engagement if you move forward.",
      features: [
        "45-min workflow interview on Google Meet (recorded via Fathom)",
        "AI analysis of transcript to surface top 5-7 automation opportunities",
        "Written report: quick wins, tool recommendations, and time/cost estimates",
        "30-min review call to walk through findings and answer questions",
      ],
    },
    {
      title: "AI Training Day",
      price: "$7,500",
      period: "One-time engagement",
      desc: "We walk your PMs and office staff through Claude and AI tools in the context of your actual jobs. One full day, on-site or remote, with a written playbook specific to your project types. Your team runs it independently after delivery.",
      highlight: false,
      ctaType: "checkout",
      cta: { label: "Book your training day", href: "https://buy.stripe.com/cNi28qh1LfEoahua9fd7q09" },
      note: null,
      features: [
        "Pre-work intake to understand your delivery methods and project mix",
        "Full-day hands-on training session",
        "Custom prompt library and workflow guide for your document types",
        "30-day email support after delivery",
      ],
    },
    {
      title: "Custom Project",
      price: "Starting at $5,000",
      period: "Per project",
      desc: "Already have tools in place and need a specific workflow built? We scope and deliver individual automation projects without a retainer commitment. Most projects evolve into two or three once the first one ships.",
      highlight: false,
      ctaType: "contact",
      cta: { label: "Tell us about your project", href: "#contact" },
      note: null,
      features: [
        "Scoping call to define deliverable and timeline",
        "Single workflow or document automation built to spec",
        "Handoff documentation and a walkthrough with your PMs",
        "Optional retainer conversion at project close",
      ],
    },
    {
      title: "Monthly Retainer",
      price: "Starting at $5,000",
      period: "Per month · scoped to your operation",
      desc: "We build and run your automations for you. Scoped around your job volume, document complexity, and growth goals. You focus on building.",
      highlight: false,
      ctaType: "contact",
      cta: { label: "Let's scope your retainer", href: "#contact" },
      note: null,
      features: [
        "2-3 new automation buildouts per month",
        "Full platform operation and maintenance",
        "Monthly outcomes reporting with ROI metrics",
        "Quarterly business reviews with ownership",
        "Up to 8-10 hours strategic consultation per month",
      ],
    },
  ],
  howItWorks: {
    eyebrow: "How retainer pricing works",
    headline: "Priced by capacity, not by hours.",
    headlineRich: [
      [
        { text: "Priced by " },
        { text: "capacity", accent: true },
        { text: ", not by " },
        { text: "hours", accent: true },
        { text: "." },
      ],
    ],
    body: "We don't bill hourly. Your retainer is scoped around how many automations you need built each month, the volume of jobs running, and how deeply embedded we are in your operations. Every engagement is different because every contractor runs work differently.",
    tiers: ["$5,000/mo — Focused", "$12,500/mo — Growth", "$25,000+/mo — Full partnership"],
  },
  note: "Salty Air works with a select number of contractors. We limit new engagements to ensure every client receives focused attention. If we're at capacity, we'll let you know and hold your place for the next available start date.",
};

export const faq: FaqContent = {
  eyebrow: "Common questions",
  headline: "What contractors ask us first.",
  items: [
    {
      q: "Do we need to replace Procore or Buildertrend?",
      a: "No. We build on top of what you already run: Procore, Buildertrend, Autodesk Build, Sage, QuickBooks, and others. The automations slot in as a layer above your existing stack. Nothing gets ripped out mid-project, and your PMs keep working the way they already do.",
    },
    {
      q: "What if the automation makes a mistake?",
      a: "Nothing leaves your office to an owner, architect, or sub without a human review unless you specifically authorize it. Every workflow includes an approval gate: AI drafts the RFI, change order, or daily log, a person reviews it, then it goes out. You stay in control at every step.",
    },
    {
      q: "How do you handle our contracts and project data?",
      a: "We sign NDAs before work begins. Before any automation is built, we walk you through exactly what data it touches, where it flows, and which third-party services are involved — you sign off on all of it before anything goes live. Every data touchpoint is documented so you and your team can review it at any time.",
    },
    {
      q: "How long does it take to go live?",
      a: "The first workflow typically goes live within two to three weeks of the discovery call. We pilot it on a single active job and run in parallel with your current process first, so there's no risk to a project in flight.",
    },
    {
      q: "Our field guys aren't going to use new software.",
      a: "They shouldn't have to. The best field-facing automations work through what crews already use — a text message, a photo, an email. If a workflow requires the field to learn a new app, we've usually designed it wrong. The heavy lifting happens in the office.",
    },
    {
      q: "Is this only for large GCs?",
      a: "The opposite. Our best results come from contractors in the 5–75 person range where the owner or a couple of PMs are still doing work that should be automated. Large GCs have IT departments and enterprise contracts. Mid-size shops are where the efficiency gap is biggest.",
    },
    {
      q: "Do you work with specialty trades and subs?",
      a: "Yes. The workflows shift — bid coverage and submittals matter less, while scheduling, crew dispatch, T&M tickets, and progress billing matter more — but the approach is the same. We start with an audit of how your work actually flows.",
    },
    {
      q: "What do you build the automations in?",
      a: "Claude Code. We build custom automations as real code rather than assembling them in a drag-and-drop tool, which means they handle logic and edge cases a no-code builder can't, they version properly, and you own the source. If your team already runs n8n, Zapier, or Make and wants everything to live there, we'll build it there instead — we just don't default to it.",
    },
    {
      q: "What happens if we want to stop?",
      a: "Everything we build is documented and handed off to you. There's no lock-in. We build your automations as code using Claude Code, so what you get is a working system plus the source, the documentation, and a walkthrough — your team or another vendor can run and extend it without us. If you already run a platform like n8n or Zapier and want the work built there instead, we'll do that.",
    },
  ],
};

export const social: SocialContent = {
  headline: "The proof is on the way.",
  stats: [
    { value: "Soon", label: "case studies in the works" },
    { value: "—", label: "average hours reclaimed" },
    { value: "—", label: "change-order turnaround lift" },
    { value: "100%", label: "tool-agnostic" },
  ],
  quote: {
    body: "Client testimonial coming soon. We're currently in pilot with several contractors — real numbers and quotes will land here as engagements wrap.",
    author: "Pilot results in progress",
    role: "Updated as engagements complete",
  },
};

export const finalCta: FinalCtaContent = {
  eyebrow: "Work Less. Live More. Automate.",
  headline: [
    [{ text: "Stop the bottleneck." }],
    [{ text: "Start " }, { text: "automating.", accent: true }],
  ],
  sub: "Tell us about your operation and we'll reach out within one business day to map out where your team is losing hours.",
  bookingHref: "https://calendar.app.google/ipYDWHD4YrQpLedJ9",
  form: {
    orgLabel: "Company name",
    orgPlaceholder: "Ridgeline Construction",
    emailPlaceholder: "jane@ridgelinegc.com",
    messageLabel: "What are you looking to automate? *",
    messagePlaceholder:
      "Tell us about your job mix, what system you run, and what's eating the most office time right now...",
    interests: [
      "Project Audit",
      "AI Training Day",
      "Custom Project",
      "Monthly Retainer",
      "Just exploring",
    ],
  },
};

export const footer: FooterContent = {
  brand: "Salty Air",
  tagline: "Work Less. Live More. Automate.",
  email: "hello@saltyair.co",
  columns: [
    {
      title: "Company",
      links: [
        { label: "Outcomes", href: "#roi" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "mailto:hello@saltyair.co" },
      ],
    },
    {
      title: "Stay close",
      links: [
        { label: "Newsletter", href: "#newsletter" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/salty-air/" },
      ],
    },
  ],
  bottom: `© ${new Date().getFullYear()} Salty Air · Privacy · Terms`,
  badge: "Built for general contractors",
};

export const constructionContent: SiteContent = {
  nav,
  hero,
  tools,
  solutions,
  trust,
  roi,
  process,
  pricing,
  faq,
  social,
  finalCta,
  footer,
};
