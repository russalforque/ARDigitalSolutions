import { interpolate } from "remotion";
import { clamp, colors, ease } from "../theme";

// The background track runs at 110 BPM; every cut and reveal lands on a beat
export const BPM = 110;
export const BEAT = (30 * 60) / BPM;
export const beats = (n: number) => Math.round(n * BEAT);

/** Blur-and-rise reveal starting at `at` (frames). */
export const reveal = (
  frame: number,
  at: number,
  distance = 40,
): React.CSSProperties => ({
  opacity: interpolate(frame, [at, at + 8], [0, 1], { ...clamp, easing: ease }),
  translate: interpolate(
    frame,
    [at, at + 14],
    [`0px ${distance}px`, "0px 0px"],
    { ...clamp, easing: ease },
  ),
  filter: `blur(${interpolate(frame, [at, at + 10], [12, 0], clamp)}px)`,
});

/** Blur-and-lift exit ending at `at + 8`. */
export const exit = (
  frame: number,
  at: number,
  distance = 40,
): React.CSSProperties => ({
  opacity: interpolate(frame, [at, at + 5], [1, 0], clamp),
  translate: interpolate(
    frame,
    [at, at + 10],
    ["0px 0px", `0px ${-distance}px`],
    { ...clamp, easing: ease },
  ),
  filter: `blur(${interpolate(frame, [at, at + 8], [0, 12], clamp)}px)`,
});

/** A word that rolls in from below on `at` and out the top on `until`. */
export const RollWord: React.FC<{
  frame: number;
  at: number;
  until?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ frame, at, until, children, style }) => {
  if (frame < at - 1 || (until !== undefined && frame > until + 10))
    return null;
  // Enter just after the previous word has cleared, so swaps never overlap
  const out = until === undefined ? {} : exit(frame, until - 2, 70);
  const inn = reveal(frame, at + 3, 70);
  return (
    <span
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        whiteSpace: "nowrap",
        ...inn,
        ...(until !== undefined && frame >= until - 2 ? out : {}),
        ...style,
      }}
    >
      {children}
    </span>
  );
};

/** White block that wipes in behind text and flips it to black, like a highlighter. */
export const Marker: React.FC<{
  frame: number;
  at: number;
  children: React.ReactNode;
  padding?: string;
}> = ({ frame, at, children, padding = "0 0.18em" }) => {
  const p = interpolate(frame, [at, at + 10], [0, 1], {
    ...clamp,
    easing: ease,
  });
  return (
    <span style={{ position: "relative", display: "inline-block", padding }}>
      <span
        style={{
          position: "absolute",
          inset: "0.08em 0",
          backgroundColor: colors.text,
          borderRadius: "0.12em",
          transformOrigin: "0 50%",
          scale: `${p} 1`,
        }}
      />
      <span
        style={{
          position: "relative",
          color: p > 0.5 ? colors.ink : colors.text,
        }}
      >
        {children}
      </span>
    </span>
  );
};

/** Small rounded tag, like the site's badges. */
export const Chip: React.FC<{
  frame: number;
  at: number;
  children: React.ReactNode;
}> = ({ frame, at, children }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 28px",
      borderRadius: 999,
      border: `1.5px solid ${colors.border}`,
      backgroundColor: "rgba(255,255,255,0.04)",
      fontSize: 30,
      color: colors.muted,
      ...reveal(frame, at, 20),
    }}
  >
    <span
      style={{
        width: 9,
        height: 9,
        borderRadius: 9,
        backgroundColor: colors.text,
      }}
    />
    {children}
  </span>
);
