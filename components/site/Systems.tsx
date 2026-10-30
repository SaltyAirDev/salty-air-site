import { systemGroups } from "@/lib/systems";

/**
 * The stacks we connect, from lib/systems.ts.
 *
 * `SystemChips` is the compact row for the homepage and the industry pages;
 * `SystemGroups` is the full breakdown on /integrations. Both are plain type —
 * no logos, so nothing on the page implies a partnership we don't have.
 */
export function SystemChips({
  tone = "teal",
  groups = systemGroups,
}: {
  tone?: "teal" | "light";
  groups?: typeof systemGroups;
}) {
  const teal = tone === "teal";

  return (
    <ul className="flex flex-wrap gap-2.5">
      {groups.flatMap((group) => group.systems).map((system) => (
        <li
          key={system}
          className={
            teal
              ? "rounded-full border border-white/25 px-4 py-2 font-sans text-sm text-white/85"
              : "rounded-full border border-primary/20 bg-white px-4 py-2 font-sans text-sm text-primary"
          }
        >
          {system}
        </li>
      ))}
    </ul>
  );
}

export function SystemGroups({ groups = systemGroups }: { groups?: typeof systemGroups }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-2xl border border-primary/15 bg-white p-7 flex flex-col"
        >
          <h3 className="font-heading font-bold text-lg text-ink">{group.title}</h3>
          <p className="mt-3 font-sans text-[15px] leading-relaxed text-body">
            {group.desc}
          </p>
          <ul className="mt-auto pt-6 flex flex-wrap gap-2">
            {group.systems.map((system) => (
              <li
                key={system}
                className="rounded-full bg-seafoam/35 px-3 py-1.5 font-sans text-[13px] text-teal-deep"
              >
                {system}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
