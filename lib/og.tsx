import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SLOGAN } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * The palm + SALTYAIR mark, inlined as a data URI.
 *
 * Satori can't reach a relative `/brand/...` URL while the card is being
 * rendered at build time, so the bytes have to travel with it. Read once per
 * process; if it ever fails the card still renders, just without the mark.
 */
const logoDataUri = (() => {
  try {
    const file = fs.readFileSync(
      path.join(process.cwd(), "public/brand/logo-saltyair-white-lg.png"),
    );
    return `data:image/png;base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
})();

type OgCardProps = {
  /** Small uppercase label at the top, beside the mark. */
  eyebrow: string;
  /** First headline line, rendered in white. */
  line1: string;
  /** Second headline line, rendered in peach. */
  line2: string;
};

/**
 * Shared 1200×630 social card: deep teal, white type, peach accent line, and
 * the brand slogan along the bottom.
 *
 * Route segments wrap this in an `opengraph-image` file — note that a page
 * exporting its own `openGraph` metadata does NOT inherit a parent segment's
 * image, so every indexed route needs its own file.
 */
export function ogCard({ eyebrow, line1, line2 }: OgCardProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#2b6064",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 10% 0%, rgba(192,218,208,0.22) 0%, transparent 62%), radial-gradient(ellipse 60% 55% at 98% 8%, rgba(245,197,147,0.20) 0%, transparent 64%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {logoDataUri ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logoDataUri} width={236} height={73} alt="" />
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(250,248,246,0.72)",
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.06,
              color: "#faf8f6",
            }}
          >
            {line1}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.06,
              color: "#f5c593",
            }}
          >
            {line2}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.04em",
            color: "rgba(250,248,246,0.72)",
          }}
        >
          {SLOGAN}
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
