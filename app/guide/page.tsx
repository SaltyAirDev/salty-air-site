import type { Metadata } from "next";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "5 Workflows Law Firms Automate First | Salty Air",
  description:
    "The highest-ROI places to apply AI automation in a boutique or mid-size practice — and what each one actually looks like in operation.",
  alternates: { canonical: "https://saltyair.co/guide" },
  openGraph: {
    title: "5 Workflows Law Firms Automate First | Salty Air",
    description:
      "The highest-ROI places to apply AI automation in a boutique or mid-size practice — and what each one actually looks like in operation.",
    type: "article",
    url: "https://saltyair.co/guide",
    siteName: "Salty Air",
  },
};

const stats = [
  { value: "15–25", label: "Non-billable hours reclaimed per attorney / week" },
  { value: "6 min", label: "Avg. intake response time after automation" },
  { value: "2.3×", label: "Faster from conflict check to matter open" },
];

const workflows = [
  {
    number: "01",
    tag: "New Business",
    title: "Client Intake & Triage",
    problem:
      "New matters sit cold for hours — sometimes days — while someone tracks down the right attorney, runs a conflict check, and figures out whether the lead is even qualified. By the time a human responds, the prospect has already called two other firms.",
    items: [
      "Smart intake forms that capture the right information upfront based on practice area",
      "Automated conflict checks against your existing matter database",
      "Instant routing to the right attorney with a complete intake summary — before they pick up the phone",
      "Immediate acknowledgment to the prospect so they know they're in the queue",
    ],
    result:
      "Intake response time drops from hours to under 10 minutes. Engagement rates on qualified leads increase significantly — simply because you're first to respond.",
  },
  {
    number: "02",
    tag: "Document Work",
    title: "Document Drafting & Routing",
    problem:
      "Demand letters, engagement agreements, discovery responses — every one of them starts from scratch or from a template that needs heavy customization. Associates spend billable hours on first drafts that a partner then rewrites anyway.",
    items: [
      "AI-drafted documents trained on your firm's actual voice and formatting preferences",
      "Engagement agreements generated from intake data — no re-keying information",
      "Demand letters and discovery responses drafted from matter notes and uploaded documents",
      "Automatic routing to the reviewing attorney with a clean approval workflow",
    ],
    result:
      "First drafts that require editing — not rewriting. Associates focus on review and strategy rather than blank-page drafting. Document turnaround time cuts by more than half.",
  },
  {
    number: "03",
    tag: "Client Communication",
    title: "Follow-Up & Client Nurture",
    problem:
      "Clients want to feel like the partner is thinking about them. In reality, status updates, check-ins, and referral asks fall through the cracks because no one has time to do them consistently. The result: clients feel neglected, and referral opportunities evaporate.",
    items: [
      "Scheduled client check-ins triggered by matter milestones — written in the partner's voice",
      "Status update emails that pull from your practice management system automatically",
      "Post-close referral asks timed appropriately after matter resolution",
      "Unopened email follow-ups so no communication falls through the cracks",
    ],
    result:
      "Clients comment that communication improved significantly — without the partner sending a single additional email. Referral volume increases as a direct result of consistent post-close outreach.",
  },
  {
    number: "04",
    tag: "Operations & Billing",
    title: "Matter & Billing Ops",
    problem:
      "Time entry gets captured late, inconsistently, or not at all. Invoice review is manual. Trust account reconciliation is a monthly ordeal. None of it requires an attorney's judgment — but it consistently ends up on one.",
    items: [
      "Time capture suggestions pulled from calendar entries, emails, and document activity",
      "Invoice drafts generated from logged time with AI-assisted narrative cleanup",
      "Trust account reconciliation pulled directly from your practice management system",
      "Billing discrepancy flags before invoices go to the client",
    ],
    result:
      "Write-offs decrease because time is captured more completely. Invoice disputes drop because errors are caught before they leave the firm. Partners stop touching billing ops entirely.",
  },
  {
    number: "05",
    tag: "Team Capability",
    title: "AI Training & Internal Tooling",
    problem:
      "Most firms know AI can help them — but attorneys don't know how to use it effectively for legal work, and no one has time to figure it out. Generic AI tools get tried, produce mediocre output, and get abandoned. The opportunity stays on the table.",
    items: [
      "A full-day hands-on training session built around your firm's actual practice areas and document types",
      "A custom prompt library so attorneys get high-quality output from day one — no guessing",
      "Workflow guides specific to your document types: demand letters, agreements, discovery, memos",
      "30-day support so adoption actually sticks after the training day",
    ],
    result:
      "Attorneys who were skeptical become the heaviest users within two weeks. The training pays for itself within the first month through time recovered on drafting alone.",
  },
];

export default function GuidePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* Cover */}
        <section className="w-full bg-primary text-background pt-40 pb-24 px-6 md:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary to-primary" />
          <div className="absolute inset-x-0 top-0 h-[60%]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,88,51,0.3),transparent_60%)]" />
          </div>
          <div className="relative max-w-4xl mx-auto">
            <span className="font-data text-xs text-accent uppercase tracking-[0.3em]">
              Salty Air · Resource Guide
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mt-5 leading-[1.05]">
              5 Workflows Law Firms{" "}
              <span className="text-accent italic">Automate First</span>
            </h1>
            <p className="mt-6 font-sans text-lg md:text-xl text-background/72 max-w-2xl leading-relaxed">
              The highest-ROI places to apply AI automation in a boutique or mid-size practice — and what each one actually looks like in operation.
            </p>
            <div className="mt-10 w-12 h-px bg-accent" />
            <p className="mt-6 font-data text-xs text-background/40 tracking-wide">
              Prepared by <span className="text-background/60">Salty Air</span> · saltyair.co · hello@saltyair.co
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="w-full bg-background border-b border-primary/10 py-16 px-6 md:px-16">
          <div className="max-w-3xl mx-auto space-y-5 font-sans text-body text-[1.05rem] leading-relaxed">
            <p>Most law firms don't have an AI problem. They have a <strong className="font-semibold text-dark">time problem</strong> — and they're spending it in the wrong places.</p>
            <p>The attorneys we work with are sharp, experienced, and genuinely good at what they do. But somewhere between intake calls, chasing documents, following up with clients, and reconciling billing, the week disappears before the real legal work gets the attention it deserves.</p>
            <p>This guide covers the five places we start with every firm we work with. Not because they're the flashiest use of AI — but because they deliver the most measurable return, the fastest, with the least disruption to how your team already operates.</p>
            <p>No ripping out your practice management software. No steep learning curves. Just systems that handle the work that shouldn't require an attorney's time.</p>
          </div>
        </section>

        {/* Stat strip */}
        <section className="w-full bg-white border-b border-primary/10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
            {stats.map((s) => (
              <div key={s.label} className="px-10 py-10 text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {s.value}
                </div>
                <div className="font-data text-xs uppercase tracking-widest text-body/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflows */}
        <section className="w-full bg-background py-20 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="font-data text-xs text-accent-warm uppercase tracking-[0.3em]">
              The Five Workflows
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-3 mb-14">
              Where the hours are hiding.
            </h2>

            <div className="flex flex-col gap-8">
              {workflows.map((w) => (
                <div key={w.number} className="rounded-2xl border border-primary/10 overflow-hidden bg-white">
                  {/* Card header */}
                  <div className="flex items-start gap-6 px-8 py-7 border-b border-primary/10 bg-background">
                    <span className="font-heading text-5xl font-bold text-primary/15 leading-none pt-1 min-w-[3rem]">
                      {w.number}
                    </span>
                    <div>
                      <p className="font-data text-xs text-accent-warm uppercase tracking-widest mb-1">
                        {w.tag}
                      </p>
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-dark">
                        {w.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-8 py-8">
                    <p className="font-data text-xs uppercase tracking-widest text-body/50 mb-2">
                      The problem
                    </p>
                    <p className="font-sans text-sm md:text-base text-body leading-relaxed mb-7">
                      {w.problem}
                    </p>

                    <p className="font-data text-xs uppercase tracking-widest text-body/50 mb-4">
                      What gets automated
                    </p>
                    <ul className="flex flex-col gap-3 mb-7">
                      {w.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-sans text-sm md:text-base text-body leading-snug">
                          <svg className="shrink-0 mt-0.5 text-accent-warm" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.4" />
                            <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="rounded-xl bg-primary text-background px-6 py-5">
                      <span className="font-data text-xs text-accent uppercase tracking-widest">
                        What firms report
                      </span>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-background/85">
                        {w.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="w-full bg-white border-t border-primary/10 py-20 px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <span className="font-data text-xs text-accent-warm uppercase tracking-[0.3em]">
              Next Step
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mt-3 mb-5">
              Not sure where your firm should start?
            </h2>
            <p className="font-sans text-base text-body leading-relaxed mb-8">
              Every firm is different — different practice areas, different tech stacks, different team dynamics. The five workflows above are where we typically begin, but the right starting point depends on where your hours are actually going.
            </p>
            <div className="border-l-2 border-accent-warm pl-6 mb-8">
              <p className="font-sans text-base text-body leading-relaxed mb-3">
                We offer a <strong className="font-semibold text-dark">no-obligation Practice Audit</strong> — a quick-fit conversation to identify which of these workflows would deliver the most meaningful return for your specific firm.
              </p>
              <p className="font-sans text-base text-body leading-relaxed">
                If there's not a strong fit, we'll tell you. If there is, we'll scope exactly what implementation looks like before you commit to anything.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-block px-10 py-4 rounded-full bg-primary text-background font-sans font-bold text-base hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group shadow-md"
            >
              <span className="relative z-10 block transition-colors group-hover:text-white">
                Request a Practice Audit
              </span>
              <span className="absolute inset-0 rounded-full bg-accent-warm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
