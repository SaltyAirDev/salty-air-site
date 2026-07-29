import type { FaqContent } from "@/lib/content-types";

/**
 * FAQPage structured data. Makes the FAQ block on a page eligible for rich
 * results, and mirrors whatever copy that page actually renders.
 */
export function FaqJsonLd({ items }: { items: FaqContent["items"] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
