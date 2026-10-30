import Link from "next/link";
import { Grain } from "@/components/brand/Grain";
import { Logo } from "@/components/brand/Logo";
import { footerColumns, legalLinks } from "@/lib/nav";
import { EMAIL } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="teal-band relative overflow-hidden text-white">
      <Grain />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div>
            <Logo variant="white" large className="h-10 mb-5" />
            <p className="font-heading font-semibold text-lg leading-snug">
              Work Less. Live More. <span className="text-accent">Automate.</span>
            </p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
              A forward-deployed engineering and integrations shop for trades,
              home services, and construction. We connect the systems you
              already pay for, set up what is missing, and build the rest.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 inline-block font-sans text-sm text-accent hover:text-white transition-colors"
            >
              {EMAIL}
            </a>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="label-caps font-sans text-white/60">{col.title}</h2>
              <ul className="mt-5 flex flex-col gap-3 font-sans text-sm text-white/75">
                {col.links.map((link) => {
                  const external = link.href.startsWith("http");
                  const mailto = link.href.startsWith("mailto:");
                  return (
                    <li key={link.href}>
                      {external || mailto ? (
                        <a
                          href={link.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="hover:text-accent transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="hover:text-accent transition-colors">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/15 pt-7 flex flex-col md:flex-row items-center justify-between gap-4 label-caps font-sans text-white/55">
          <p>
            Salty Air Co. <span className="mx-2 text-white/25">|</span> © {year}
            <span className="mx-2 text-white/25">|</span> Salt Lake, UT
          </p>
          {/* Real anchors — these two were plain text in the old footer, which
              is why /privacy and /terms read as 404s to anyone who tried. */}
          <p className="flex items-center gap-2">
            {legalLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/25">|</span>}
                <Link href={link.href} className="hover:text-accent transition-colors">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
