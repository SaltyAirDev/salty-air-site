import type { RichHeadline as RichHeadlineType } from "@/lib/content-types";

/**
 * Renders a headline defined in content as spans, so each audience variant can
 * choose which words get the accent colour without touching the component.
 * Each line renders as its own block, replacing hard-coded <br /> markup.
 */
export function RichHeadline({
  lines,
  accentClass,
}: {
  lines: RichHeadlineType;
  accentClass: string;
}) {
  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.map((span, j) =>
            span.accent ? (
              <span key={j} className={accentClass}>
                {span.text}
              </span>
            ) : (
              <span key={j}>{span.text}</span>
            ),
          )}
        </span>
      ))}
    </>
  );
}
