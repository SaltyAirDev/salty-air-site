import Image from "next/image";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="w-full bg-dark rounded-t-[3rem] pt-24 pb-10 px-8 md:px-16 text-background relative z-30 -mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Image
            src="/logo-white.png"
            alt={footer.brand}
            width={160}
            height={44}
            className="h-11 w-auto object-contain mb-4"
          />
          <p className="text-background/65 font-sans text-sm leading-relaxed mb-6">
            {footer.tagline}
          </p>
        </div>

        <div className="hidden md:block" />

        {footer.columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-heading font-bold text-sm mb-5 text-background/80 uppercase tracking-widest">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-background/55 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-background/15 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-data text-background/55">
        <p>{footer.bottom}</p>
        <p className="mt-4 md:mt-0 uppercase tracking-widest">
          Built for law practices
        </p>
      </div>
    </footer>
  );
}
