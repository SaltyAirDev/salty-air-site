import { tools } from "@/lib/content";

export function LogoMarquee() {
  const doubled = [...tools, ...tools];
  return (
    <div className="relative w-full overflow-hidden mask-edges py-7">
      <div className="flex gap-16 animate-marquee whitespace-nowrap w-max">
        {doubled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="font-data text-sm md:text-base text-accent/75 uppercase tracking-[0.25em] font-medium shrink-0"
          >
            {tool}
          </span>
        ))}
      </div>
      <style>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </div>
  );
}
