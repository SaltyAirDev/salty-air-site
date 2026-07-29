import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgCardProps = {
  /** Small uppercase label at the top. */
  eyebrow: string;
  /** First headline line, rendered in off-white. */
  line1: string;
  /** Second headline line, rendered in the accent colour. */
  line2: string;
};

/**
 * Shared 1200×630 social card. Route segments wrap this in an `opengraph-image`
 * file — note that a page exporting its own `openGraph` metadata does NOT
 * inherit a parent segment's image, so every indexed route needs its own file.
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
          padding: "80px",
          backgroundColor: "#1a1a1a",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 20% 0%, #2b6064 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(223,118,67,0.55) 0%, transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#f5c593",
          }}
        >
          {eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#faf8f6",
            }}
          >
            {line1}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#f5c593",
            }}
          >
            {line2}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "rgba(250,248,246,0.7)" }}>
          Work Less. Live More. Automate.
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
