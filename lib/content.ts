export const nav = {
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

export const hero = {
  eyebrow: "",
  headline: "Practice growth,",
  headlineAccent: "automated.",
  sub: "Bespoke AI workflows for law firms: intake, drafting, follow-ups, and matter management, automated end-to-end.",
  trust: "Designed with ABA Rule 1.6 and client confidentiality requirements in mind.",
  primaryCta: { label: "Get Started", href: "#contact" },
};

export const tools = [
  "Clio",
  "MyCase",
  "PracticePanther",
  "Filevine",
  "DocuSign",
  "Zapier",
  "n8n",
  "OpenAI",
  "Slack",
  "Gmail",
];

export const solutions = {
  eyebrow: "What we build",
  headline: "Built with law firms in mind.",
  sub: "Systems we've built to allow practices to run without the partners holding every wheel.",
  categories: [
    {
      title: "Client Intake & Triage",
      desc: "Smart intake forms, conflict checks, and instant routing. New matters never sit cold.",
    },
    {
      title: "Document Drafting & Routing",
      desc: "AI-drafted demand letters, engagement agreements, and discovery responses in your firm's voice — routed to the right attorney for review and sign-off.",
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
      desc: "Have a workflow that doesn't fit a category? We build bespoke AI automations and one-off projects scoped to your firm's specific edge cases.",
    },
  ],
};

export const trust = {
  headline: "Built for boutique and mid-size law firms.",
  link: { label: "See what we build →", href: "#solutions" },
};

export const roi = {
  eyebrow: "Outcomes",
  headline: "More billable hours.\nLess admin work.",
  sub: "Firms we work with reclaim 15–25 non-billable hours per attorney each week and cut intake-to-engagement time by more than half.",
  metrics: [
    { label: "Intake response", value: "6 min", trend: "−94%", desc: "Time from form submission to first attorney touchpoint" },
    { label: "Engagement rate", value: "41%", trend: "+22 pts", desc: "Leads that converted to signed engagement agreements" },
    { label: "Hours reclaimed", value: "20/wk", trend: "—", desc: "Non-billable admin hours freed per attorney, per week" },
    { label: "Matter velocity", value: "2.3×", trend: "+130%", desc: "Speed from conflict check to matter open vs. pre-automation" },
  ],
};

export const process = {
  eyebrow: "How we work",
  headline: "From first call to fully automated.",
  sub: "A six-step engagement we've refined to fit how law firms actually adopt new tooling — measured, documented, and reversible at every stage.",
  steps: [
    {
      title: "Practice Audit",
      desc: "Quick-fit check to confirm we can deliver meaningful results for your firm's caseload, tech stack, and team size.",
    },
    {
      title: "Discovery",
      desc: "60-minute blueprint call to map your goals, current tools, and the highest-ROI workflows to automate first.",
    },
    {
      title: "Workflow Design",
      desc: "We design AI agents that handle the work end-to-end, slotting into the tools your firm already uses (with no impact on live operations until we have your approval).",
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

export const pricing = {
  eyebrow: "Engagements",
  headline: "Pricing built around your goals.",
  sub: "From a single training day to a full-service retainer, every engagement is scoped to where your firm is today.",
  tiers: [
    {
      title: "AI Training Day",
      price: "$7,500",
      period: "One-time engagement",
      desc: "We walk your firm through Claude and AI tools in the context of your actual workflows. One full day, on-site or remote, with a written playbook specific to your practice areas. Your team runs it independently after delivery.",
      highlight: false,
      ctaType: "checkout",
      cta: { label: "Book your training day", href: "https://buy.stripe.com/cNi28qh1LfEoahua9fd7q09" },
      note: "Training fee applied toward your assessment if you move forward within 90 days.",
      features: [
        "Pre-work intake to understand your practice areas",
        "Full-day hands-on training session",
        "Custom prompt library and workflow guide for your document types",
        "30-day email support after delivery",
      ],
    },
    {
      title: "Strategic AI Assessment",
      price: "$12,000",
      period: "One-time engagement · 14 business days",
      desc: "A full audit of your firm's workflows with a written implementation roadmap, ROI estimates, and a prioritized 90-day plan — presented to firm leadership.",
      highlight: true,
      ctaType: "checkout",
      cta: { label: "Request your assessment", href: "https://buy.stripe.com/fZu7sKcLveAk0GUepvd7q0a" },
      note: null,
      features: [
        "Workflow audit across loan, M&A, and real estate document types",
        "Minimum 5 prioritized automation opportunities identified",
        "Associate-hours recovery projections",
        "90-day implementation roadmap",
        "90-minute presentation to firm leadership",
      ],
    },
    {
      title: "Monthly Retainer",
      price: "Starting at $5,000",
      period: "Per month · scoped to your firm",
      desc: "We build and run your automations for you. Scoped around your firm's volume, document complexity, and growth goals. You focus on practicing law.",
      highlight: false,
      ctaType: "contact",
      cta: { label: "Let's scope your retainer", href: "#contact" },
      note: null,
      features: [
        "2–3 new automation buildouts per month",
        "Full platform operation and maintenance",
        "Monthly outcomes reporting with ROI metrics",
        "Quarterly business reviews with firm leadership",
        "Up to 8–10 hours strategic consultation per month",
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
  ],
  howItWorks: {
    eyebrow: "How retainer pricing works",
    headline: "Priced by capacity, not by hours.",
    body: "We don't bill hourly. Your retainer is scoped around how many automations you need built each month, the volume of documents processed, and how deeply embedded we are in your operations. Every engagement is different because every firm is different.",
    tiers: ["$5,000/mo — Focused", "$12,500/mo — Growth", "$25,000+/mo — Full partnership"],
  },
  note: "Salty Air works with a select number of law firms. We limit new engagements to ensure every client receives focused attention. If we're at capacity, we'll let you know and hold your place for the next available start date.",
};

export const faq = {
  eyebrow: "Common questions",
  headline: "What firms ask us first.",
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
      q: "Is this only for large firms?",
      a: "The opposite. Our best results come from boutique and mid-size practices (2–30 attorneys) where the partners are still doing work that should be automated. Larger firms have IT departments and enterprise contracts. Smaller firms are where the efficiency gap is biggest.",
    },
    {
      q: "What happens if we want to stop?",
      a: "Everything we build is documented and handed off to you. There's no lock-in. The workflows live in your own n8n instance or Zapier account, and we provide full documentation so your team (or another vendor) can maintain them without us.",
    },
  ],
};

export const social = {
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

export const finalCta = {
  eyebrow: "Ready to systematize?",
  headline: [
    { lead: "Stop the bottleneck." },
    { lead: "Start ", highlight: "automating." },
  ],
  sub: "Tell us about your firm and we'll reach out within one business day to map out where you're leaving billable hours on the table.",
  bookingHref: "https://calendar.app.google/ipYDWHD4YrQpLedJ9",
};

export const footer = {
  brand: "Salty Air",
  tagline: "AI automation for law firms.",
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
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  bottom: `© ${new Date().getFullYear()} Salty Air · Privacy · Terms`,
};
