/**
 * Site voice.
 *
 * Every piece of copy that talks about Salty Air in the first person goes
 * through this helper instead of hard-coding "we". The site ships in **company
 * voice** — "we run our own home services company" — and that is the default
 * and the documented house style (see SITE.md, "Company voice, always we").
 *
 * The helper exists so that switching the whole site to a founder's first
 * person later is one line here rather than a copy pass over every page. Flip
 * `VOICE` to "founder" and the strings built from `v` change with it.
 *
 * Only the forms copy actually needs are listed. Add a form when a sentence
 * needs it — do not inline a pronoun to avoid adding one.
 */
export type Voice = "company" | "founder";

/** The shipped voice. Company "we". */
export const VOICE: Voice = "company";

type Forms = {
  /** Subject pronoun, mid-sentence. */
  we: string;
  /** Subject pronoun, sentence-initial. */
  We: string;
  /** Possessive, mid-sentence. */
  our: string;
  /** Possessive, sentence-initial. */
  Our: string;
  /** Object pronoun. */
  us: string;
  /** "to be", present, agreeing with the subject pronoun. */
  are: string;
  /** Reflexive. */
  ourselves: string;
};

const forms: Record<Voice, Forms> = {
  company: {
    we: "we",
    We: "We",
    our: "our",
    Our: "Our",
    us: "us",
    are: "are",
    ourselves: "ourselves",
  },
  founder: {
    we: "I",
    We: "I",
    our: "my",
    Our: "My",
    us: "me",
    are: "am",
    ourselves: "myself",
  },
};

/** The forms for the shipped voice. Interpolate these into copy. */
export const v: Forms = forms[VOICE];
