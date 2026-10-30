import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import type { ReactNode } from "react";

/** Nav + page + footer. Every route renders inside this. */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-ink">{children}</main>
      <Footer />
    </>
  );
}
