import { SitePage } from "@/components/SitePage";
import { businessContent } from "@/lib/content-business";
import { FaqJsonLd } from "@/components/seo/FaqJsonLd";

// Page metadata for `/` lives in app/layout.tsx, since it is the site-wide default.

export default function Home() {
  return (
    <>
      <FaqJsonLd items={businessContent.faq.items} />
      <SitePage content={businessContent} />
    </>
  );
}
