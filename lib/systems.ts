/**
 * The stacks we connect.
 *
 * Every name here is a system a trade shop, home services company, or general
 * contractor is already paying for. Listing them is the offer: we are the shop
 * that makes them talk to each other. No logos, no partner badges, no implied
 * endorsement — just the software we work in.
 *
 * Drives /integrations, the homepage stack band, and the JSON-LD `knowsAbout`.
 */

export type SystemGroup = {
  title: string;
  desc: string;
  /** Named systems, in the order an owner would recognise them. */
  systems: string[];
};

export const systemGroups: SystemGroup[] = [
  {
    title: "Field service & dispatch",
    desc: "The board your crews actually work off. Leads land in it, jobs leave it, and almost nothing else in the business is wired to it.",
    systems: ["Housecall Pro", "Jobber", "ServiceTitan"],
  },
  {
    title: "Project & document management",
    desc: "Plan rooms, drawings, RFIs, submittals, and daily reports — usually in a system nobody has connected to accounting.",
    systems: ["Procore", "Buildertrend", "Autodesk Build", "Bluebeam"],
  },
  {
    title: "CRM & sales",
    desc: "Where bids, estimates, and the follow-up live. In most shops it is a spreadsheet wearing a CRM's name.",
    systems: ["HubSpot", "Pipedrive", "Salesforce", "Spreadsheets"],
  },
  {
    title: "Accounting & payroll",
    desc: "The ledger everything has to reconcile against, and the one system people are most afraid to automate.",
    systems: ["QuickBooks", "Sage 300 CRE", "Gusto"],
  },
  {
    title: "Phones & messaging",
    desc: "Calls, texts, and the AI answering line. The first system we usually touch, because it is where the work is lost.",
    systems: ["Quo", "VoIP lines", "SMS"],
  },
  {
    title: "Email & calendar",
    desc: "Inboxes, shared calendars, and the forms feeding them. Still where half the business runs, so it has to be wired in, not worked around.",
    systems: ["Google Workspace", "Microsoft 365"],
  },
  {
    title: "Data & reporting",
    desc: "One place to see jobs, margin, and backlog without exporting three reports and joining them by hand.",
    systems: ["Warehouses", "Dashboards", "Scheduled reports"],
  },
];

/** Flat list of every named system, for JSON-LD and copy that needs a run-on. */
export const allSystems = systemGroups.flatMap((g) => g.systems);

/**
 * The three things we actually do with a stack, in the order they come up.
 * Used on /integrations, /embedded, and the homepage.
 */
export const integrationModes: Array<{ title: string; desc: string }> = [
  {
    title: "Connect what you already pay for",
    desc: "Most businesses do not need more software. They need the six systems already on the card statement to hand work to each other instead of to a person with a clipboard. We map the stack, find the seams, and wire them shut.",
  },
  {
    title: "Set up what is missing",
    desc: "Sometimes the gap is real: there is no CRM, nothing answers the phone after five, nobody owns the follow-up. We set up the missing piece in an account you own and connect it to the rest on the way in.",
  },
  {
    title: "Build custom where nothing fits",
    desc: "And sometimes the work is specific enough that no product covers it. Then we build it — real code, in your accounts, documented, with the source yours to keep.",
  },
];

/**
 * The seams we see most often. Named plainly, because an owner recognises the
 * symptom long before they would recognise the word "integration".
 */
export const commonSeams: string[] = [
  "Web leads that arrive as an email somebody has to retype into dispatch",
  "A phone system that knows who called and a CRM that does not",
  "Estimates and change orders tracked in a spreadsheet nobody reconciles against the ledger",
  "Job costs in the field system and invoices in QuickBooks, joined by hand at month end",
  "Two calendars, three inboxes, and no single place a job's history lives",
  "Reporting that means exporting from four systems and hoping the dates line up",
];
