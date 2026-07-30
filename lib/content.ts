/**
 * Law-practice copy. This is the default content every section component falls
 * back to, and what `/` and `/industries/law` render.
 *
 * The general-business variant lives in `lib/content-business.ts` and must keep
 * the same shape — both are typed against `lib/content-types.ts`.
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
  headline: "Practice growth,",
  headlineAccent: "automated.",
  sub: "Bespoke AI workflows for law practices: intake, drafting, follow-ups, and matter management, automated end-to-end.",
  trust: "Designed with ABA Rule 1.6 and client confidentiality requirements in mind.",
  primaryCta: { label: "Get Started", href: "#contact" },
};

export const tools: string[] = [
  "Clio",
  "MyCase",
  "PracticePanther",
  "Filevine",
  "DocuSign",
  "Claude Code",
  "OpenAI",
  "Slack",
  "Gmail",
];

export const solutions: SolutionsContent = {
  eyebrow: "What we build",
  headline: "Built with practices in mind.",
  headlineRich: [
    [{ text: "Built with " }, { text: "practices", accent: true }, { text: " in mind." }],
  ],
  sub: "Systems we've built to allow practices to run without the partners holding every wheel.",
  ctaLabel: "Get Started Today",
  categories: [
    {
      title: "Client Intake & Triage",
      desc: "Smart intake forms, conflict checks, and instant routing. New matters never sit cold.",
    },
    {
      title: "Document Drafting & Routing",
      desc: "AI-drafted demand letters, engagement agreements, and discovery responses in your practice's voice — routed to the right attorney for review and sign-off.",
    },
    {
      title: "Follow-Up & Nurture",
      desc: "Automated client check-ins, status updates, and referral asks that sound like the partner sent them.",
    },
    {
      title: "Matter & Billing Ops",
      desc: "Time capture, invoice review, and trust-account reconciliation — pulled from your PMS, validated by AI.",
    },
    {
      title: "Bespoke Automations",
      desc: "Have a workflow that doesn't fit a category? We build bespoke AI automations and one-off projects scoped to your practice's specific edge cases.",
    },
  ],
};

export const trust: TrustContent = {
  headline: "Built for law practices.",
  link: { label: "See what we build →", href: "#solutions" },
};

export const roi: RoiContent = {
  eyebrow: "Outcomes",
  headline: "More billable hours. Less admin work.",
  headlineRich: [
    [{ text: "More billable hours." }],
    [{ text: "Less " }, { text: "admin work", accent: true }, { text: "." }],
  ],
  sub: "Practices we work with reclaim 15–25 non-billable hours per attorney each week and cut intake-to-engagement time by more than half.",
  dashboardLabel: "Owner Dashboard · Live",
  footnote:
    "* Example data from a client engagement. Results vary by firm size, caseload, and workflow complexity.",
  ctaLabel: "Let's Talk",
  metrics: [
    { label: "Intake response", value: "6 min", trend: "−94%", desc: "Time from form submission to first attorney touchpoint" },
    { label: "Engagement rate", value: "41%", trend: "+22 pts", desc: "Leads that converted to signed engagement agreements" },
    { label: "Hours reclaimed", value: "20/wk", trend: "—", desc: "Non-billable admin hours freed per attorney, per week" },
    { label: "Matter velocity", value: "2.3×", trend: "+130%", desc: "Speed from conflict check to matter open vs. pre-automation" },
  ],
};

export const process: ProcessContent = {
  eyebrow: "How we work",
  headline: "From first call to fully automated.",
  headlineRich: [
    [{ text: "From first call to fully " }, { text: "automated.", accent: true }],
  ],
  sub: "A six-step engagement we've refined to fit how law practices actually adopt new tooling — measured, documented, and reversible at every stage.",
  steps: [
    {
      title: "Practice Audit",
      desc: "Quick-fit check to confirm we can deliver meaningful results for your practice's caseload, tech stack, and team size.",
    },
    {
      title: "Discovery",
      desc: "60-minute blueprint call to map your goals, current tools, and the highest-ROI workflows to automate first.",
    },
    {
      title: "Workflow Design",
      desc: "We design AI agents that handle the work end-to-end, slotting into the tools your practice already uses (with no impact on live operations until we have your approval).",
    },
    {
      title: "Deploy",
      desc: "Workflows go live inside your existing stack, fully documented for your IT and operations teams.",
    },
    {
      title: "Scale & Optimize",
      desc: "Ongoing tuning, or a clean hand-off to your team so the automations keep paying dividends as the practice grows.",
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
  sub: "Low-commitment entry point to find exactly where your practice is losing hours, then we build it out.",
  tiers: [
    {
      title: "Practice Audit",
      price: "$499",
      period: "One-time · delivered in 5 business days",
      desc: "A focused audit of your practice's workflows. We find where the hours are going, identify the highest-ROI automations, and hand you a written report you can act on immediately.",
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
      desc: "We walk your practice through Claude and AI tools in the context of your actual workflows. One full day, on-site or remote, with a written playbook specific to your practice areas. Your team runs it independently after delivery.",
      highlight: false,
      ctaType: "checkout",
      cta: { label: "Book your training day", href: "https://buy.stripe.com/cNi28qh1LfEoahua9fd7q09" },
      note: null,
      features: [
        "Pre-work intake to understand your practice areas",
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
        "Handoff documentation and attorney review walkthrough",
        "Optional retainer conversion at project close",
      ],
    },
    {
      title: "Monthly Retainer",
      price: "Starting at $5,000",
      period: "Per month · scoped to your practice",
      desc: "We build and run your automations for you. Scoped around your practice's volume, document complexity, and growth goals. You focus on practicing law.",
      highlight: false,
      ctaType: "contact",
      cta: { label: "Let's scope your retainer", href: "#contact" },
      note: null,
      features: [
        "2-3 new automation buildouts per month",
        "Full platform operation and maintenance",
        "Monthly outcomes reporting with ROI metrics",
        "Quarterly business reviews with practice leadership",
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
    body: "We don't bill hourly. Your retainer is scoped around how many automations you need built each month, the volume of documents processed, and how deeply embedded we are in your operations. Every engagement is different because every practice is different.",
    tiers: ["$5,000/mo — Focused", "$12,500/mo — Growth", "$25,000+/mo — Full partnership"],
  },
  note: "Salty Air works with a select number of law practices. We limit new engagements to ensure every client receives focused attention. If we're at capacity, we'll let you know and hold your place for the next available start date.",
};

export const faq: FaqContent = {
  eyebrow: "Common questions",
  headline: "What practices ask us first.",
  items: [
    {
      q: "How do you handle client confidentiality?",
      a: "We sign NDAs with every client before work begins. Before any automation is built, we walk you through exactly what data it touches, where it flows, and which third-party services are involved — you sign off on all of it before anything goes live. Every data touchpoint is documented so you and your team can review it at any time. Nothing runs without your approval.",
    },
    {
      q: "Do we need to replace our practice management software?",
      a: "No. We build on top of what you already use: Clio, MyCase, PracticePanther, Filevine, and others. The automations slot in as a layer above your existing stack. Nothing gets ripped out; your team keeps working the way they already do.",
    },
    {
      q: "What if the automation makes a mistake?",
      a: "Nothing client-facing sends automatically without attorney review unless you specifically authorize it. Every workflow includes an approval gate: AI drafts the output, a human reviews it, then it moves forward. You stay in control at every step.",
    },
    {
      q: "How long does it take to go live?",
      a: "The first workflow typically goes live within two to three weeks of the discovery call. We run a parallel test period before anything touches live matters, so there's no disruption to ongoing cases.",
    },
    {
      q: "Is this only for large practices?",
      a: "The opposite. Our best results come from boutique and mid-size practices (2–30 attorneys) where the partners are still doing work that should be automated. Larger practices have IT departments and enterprise contracts. Smaller practices are where the efficiency gap is biggest.",
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
    { value: "—", label: "intake-to-engagement lift" },
    { value: "100%", label: "tool-agnostic" },
  ],
  quote: {
    body: "Client testimonial coming soon. We're currently in pilot with several boutique and mid-size firms — real numbers and quotes will land here as engagements wrap.",
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
  sub: "Tell us about your practice and we'll reach out within one business day to map out where you're leaving billable hours on the table.",
  bookingHref: "https://calendar.app.google/ipYDWHD4YrQpLedJ9",
  form: {
    orgLabel: "Practice name",
    orgPlaceholder: "Smith & Associates",
    emailPlaceholder: "jane@smithlaw.com",
    messageLabel: "What are you looking to automate? *",
    messagePlaceholder:
      "Tell us about your practice, your current bottlenecks, and what you'd most like to get off your plate...",
    interests: [
      "Practice Audit",
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
  badge: "Built for law practices",
};

/** Every law slice bundled, for pages that render the whole variant at once. */
export const lawContent = {
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

export type SiteContent = typeof lawContent;
