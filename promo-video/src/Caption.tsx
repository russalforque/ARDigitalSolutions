import { Interactive, interpolate, useCurrentFrame } from "remotion";
import { Eyebrow } from "./Brand";
import { clamp, colors, ease, fontFamily } from "./theme";

/** Blur-and-rise reveal, the same move as the site's BlurText headings. */
export const blurIn = (
  frame: number,
  start: number,
  distance = 30,
): React.CSSProperties => ({
  opacity: interpolate(frame, [start, start + 16], [0, 1], {
    ...clamp,
    easing: ease,
  }),
  translate: interpolate(
    frame,
    [start, start + 22],
    [`0px ${-distance}px`, "0px 0px"],
    { ...clamp, easing: ease },
  ),
  filter: `blur(${interpolate(frame, [start, start + 18], [14, 0], clamp)}px)`,
});

/** Left-column scene text: an eyebrow, a headline and an optional line under it. */
export const Caption: React.FC<{
  label: string;
  title: React.ReactNode;
  body?: string;
  width?: number;
}> = ({ label, title, body, width = 500 }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        fontFamily,
        width,
        display: "flex",
        flexDirection: "column",
        gap: 28,
      }}
    >
      <Interactive.Div name="Label" style={blurIn(frame, 4, 12)}>
        <Eyebrow>{label}</Eyebrow>
      </Interactive.Div>
      <Interactive.Div
        name="Title"
        style={{
          fontSize: 76,
          fontWeight: 500,
          lineHeight: 0.98,
          letterSpacing: "-0.05em",
          color: colors.text,
          ...blurIn(frame, 9),
        }}
      >
        {title}
      </Interactive.Div>
      {body ? (
        <Interactive.Div
          name="Body"
          style={{
            fontSize: 30,
            fontWeight: 400,
            lineHeight: 1.4,
            color: colors.muted,
            ...blurIn(frame, 18, 16),
          }}
        >
          {body}
        </Interactive.Div>
      ) : null}
    </div>
  );
};

/** The grey second half of a headline, like "around your business." on the site. */
export const Dim: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{ color: colors.faint }}>{children}</span>
);
