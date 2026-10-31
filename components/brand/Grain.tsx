/**
 * Film grain for the deep-teal bands. The deck's teal is textured, not flat,
 * and a turbulence filter gets there without shipping a 1 MB texture.
 *
 * Several bands render this at once; the filter `id` is intentionally shared,
 * since the definition is identical everywhere and the first one in the
 * document wins.
 */
export function Grain() {
  return (
    <svg className="grain-layer" aria-hidden="true">
      <filter id="saltyGrain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#saltyGrain)" />
    </svg>
  );
}
