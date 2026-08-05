/**
 * General-business copy — the audience-agnostic version of the law site.
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
import { industriesNavLink, industryLinks } from "./industries";

export const nav: NavContent = {
  brand: "Salty Air",
  links: [
    { label: "Solutions", href: "#solutions" },
    industriesNavLink,
    { label: "Outcomes", href: "#roi" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get Started", href: "#contact" },
};

export const hero: HeroContent = {
  eyebrow: "Work Less. Live More. Automate.",
  headline: "Business growth,",
  headlineAccent: "automated.",
  sub: "Bespoke AI workflows for growing businesses: lead intake, proposals, follow-ups, and back-office ops, automated end-to-end.",
  trust: "Built around your existing tools, your data, and your approval at every step.",
  primaryCta: { label: "Get Started", href: "#contact" },
};

export const tools: string[] = [
  "HubSpot",
  "Salesforce",
  "QuickBooks",
  "Airtable",
  "Notion",
  "DocuSign",
  "Claude Code",
  "OpenAI",
  "Slack",
  "Gmail",
];

export const solutions: SolutionsContent = {
  eyebrow: "What we build",
  headline: "Built with businesses in mind.",
  headlineRich: [
    [{ text: "Built with " }, { text: "businesses", accent: true }, { text: " in mind." }],
  ],
  sub: "Systems we've built to allow businesses to run without the owner holding every wheel.",
  ctaLabel: "Get Started Today",
  categories: [
    {
      title: "Lead Intake & Triage",
      desc: "Smart intake forms, instant qualification, and routing to the right person. New leads never sit cold.",
    },
    {
      title: "Proposals & Document Drafting",
      desc: "AI-drafted proposals, quotes, contracts, and SOPs in your company's voice — routed to the right person for review and sign-off.",
    },
    {
      title: "Follow-Up & Nurture",
      desc: "Automated client check-ins, status updates, and referral asks that sound like the owner sent them.",
    },
    {
      title: "Back-Office & Billing Ops",
      desc: "Invoicing, payment chasing, and reconciliation — pulled from your CRM and accounting system, validated by AI.",
    },
    {
      title: "Bespoke Automations",
      desc: "Have a workflow that doesn't fit a category? We build bespoke AI automations and one-off projects scoped to your business's specific edge cases.",
    },
  ],
};

export const trust: TrustContent = {
  headline: "Built for growing businesses.",
  link: { label: "See what we build →", href: "#solutions" },
};

export const roi: RoiContent = {
  eyebrow: "Outcomes",
  headline: "More hours on growth. Less admin work.",
  headlineRich: [
    [{ text: "More hours on growth." }],
    [{ text: "Less " }, { text: "admin work", accent: true }, { text: "." }],
  ],
  sub: "Businesses we work with reclaim 15–25 hours per person each week and cut lead-to-signed time by more than half.",
  dashboardLabel: "Owner Dashboard · Live",
  footnote:
    "* Example data from a client engagement. Results vary by team size, deal volume, and workflow complexity.",
  ctaLabel: "Let's Talk",
  metrics: [
    { label: "Lead response", value: "6 min", trend: "−94%", desc: "Time from form submission to first human touchpoint" },
    { label: "Close rate", value: "41%", trend: "+22 pts", desc: "Leads that converted to signed agreements" },
    { label: "Hours reclaimed", value: "20/wk", trend: "—", desc: "Admin hours freed per team member, per week" },
    { label: "Delivery velocity", value: "2.3×", trend: "+130%", desc: "Speed from signed to kickoff vs. pre-automation" },
  ],
};

export const process: ProcessContent = {
  eyebrow: "How we work",
  headline: "From first call to fully automated.",
  headlineRich: [
    [{ text: "From first call to fully " }, { text: "automated.", accent: true }],
  ],
  sub: "A six-step engagement we've refined to fit how businesses actually adopt new tooling — measured, documented, and reversible at every stage.",
  steps: [
    {
      title: "Business Audit",
      desc: "Quick-fit check to confirm we can deliver meaningful results for your workload, tech stack, and team size.",
    },
    {
      title: "Discovery",
      desc: "60-minute blueprint call to map your goals, current tools, and the highest-ROI workflows to automate first.",
    },
    {
      title: "Workflow Design",
      desc: "We design AI agents that handle the work end-to-end, slotting into the tools your business already uses (with no impact on live operations until we have your approval).",
    },
    {
      title: "Deploy",
      desc: "Workflows go live inside your existing stack, fully documented for your IT and operations teams.",
    },
    {
      title: "Scale & Optimize",
      desc: "Ongoing tuning, or a clean hand-off to your team so the automations keep paying dividends as the business grows.",
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
  sub: "Low-commitment entry point to find exactly where your business is losing hours, then we build it out.",
  tiers: [
    {
      title: "Business Audit",
      price: "$499",
      period: "One-time · delivered in 5 business days",
      desc: "A focused audit of your business's workflows. We find where the hours are going, identify the highest-ROI automations, and hand you a written report you can act on immediately.",
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
      desc: "We walk your team through Claude and AI tools in the context of your actual workflows. One full day, on-site or remote, with a written playbook specific to how your business runs. Your team runs it independently after delivery.",
      highlight: false,
      ctaType: "checkout",
      cta: { label: "Book your training day", href: "https://buy.stripe.com/cNi28qh1LfEoahua9fd7q09" },
      note: null,
      features: [
        "Pre-work intake to understand how your business operates",
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
        "Handoff documentation and a team walkthrough",
        "Optional retainer conversion at project close",
      ],
    },
    {
      title: "Monthly Retainer",
      price: "Starting at $5,000",
      period: "Per month · scoped to your business",
      desc: "We build and run your automations for you. Scoped around your volume, process complexity, and growth goals. You focus on running the business.",
      highlight: false,
      ctaType: "contact",
      cta: { label: "Let's scope your retainer", href: "#contact" },
      note: null,
      features: [
        "2-3 new automation buildouts per month",
        "Full platform operation and maintenance",
        "Monthly outcomes reporting with ROI metrics",
        "Quarterly business reviews with your leadership team",
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
    body: "We don't bill hourly. Your retainer is scoped around how many automations you need built each month, the volume of work processed, and how deeply embedded we are in your operations. Every engagement is different because every business is different.",
    tiers: ["$5,000/mo — Focused", "$12,500/mo — Growth", "$25,000+/mo — Full partnership"],
  },
  note: "Salty Air works with a select number of businesses. We limit new engagements to ensure every client receives focused attention. If we're at capacity, we'll let you know and hold your place for the next available start date.",
};

export const faq: FaqContent = {
  eyebrow: "Common questions",
  headline: "What owners ask us first.",
  items: [
    {
      q: "How do you handle our data and confidentiality?",
      a: "We sign NDAs with every client before work begins. Before any automation is built, we walk you through exactly what data it touches, where it flows, and which third-party services are involved — you sign off on all of it before anything goes live. Every data touchpoint is documented so you and your team can review it at any time. Nothing runs without your approval.",
    },
    {
      q: "Do we need to replace our current software?",
      a: "No. We build on top of what you already use: HubSpot, Salesforce, QuickBooks, Airtable, Notion, and others. The automations slot in as a layer above your existing stack. Nothing gets ripped out; your team keeps working the way they already do.",
    },
    {
      q: "What if the automation makes a mistake?",
      a: "Nothing client-facing sends automatically without a human review unless you specifically authorize it. Every workflow includes an approval gate: AI drafts the output, a person reviews it, then it moves forward. You stay in control at every step.",
    },
    {
      q: "How long does it take to go live?",
      a: "The first workflow typically goes live within two to three weeks of the discovery call. We run a parallel test period before anything touches live customer work, so there's no disruption to your operations.",
    },
    {
      q: "Is this only for large companies?",
      a: "The opposite. Our best results come from small and mid-size businesses (2–50 people) where the owner is still doing work that should be automated. Larger companies have IT departments and enterprise contracts. Smaller businesses are where the efficiency gap is biggest.",
    },
    {
      q: "Do you specialize in any particular industry?",
      a: "We work across industries, and we've built deep playbooks for a few. Law practices have their own page with workflows specific to intake, conflict checks, and matter management. If your industry isn't listed yet, the core approach is the same — we start with an audit of how your business actually runs.",
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
    { value: "—", label: "lead-to-close lift" },
    { value: "100%", label: "tool-agnostic" },
  ],
  quote: {
    body: "Client testimonial coming soon. We're currently in pilot with several small and mid-size businesses — real numbers and quotes will land here as engagements wrap.",
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
  sub: "Tell us about your business and we'll reach out within one business day to map out where you're leaving hours on the table.",
  bookingHref: "https://calendar.app.google/ipYDWHD4YrQpLedJ9",
  form: {
    orgLabel: "Company name",
    orgPlaceholder: "Acme Co.",
    emailPlaceholder: "jane@acmeco.com",
    messageLabel: "What are you looking to automate? *",
    messagePlaceholder:
      "Tell us about your business, your current bottlenecks, and what you'd most like to get off your plate...",
    interests: [
      "Business Audit",
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
      title: "Industries",
      links: industryLinks,
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
  badge: "Built for growing businesses",
};

export const businessContent: SiteContent = {
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
