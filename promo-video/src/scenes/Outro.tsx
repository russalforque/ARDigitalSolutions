import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Eyebrow, Wordmark } from "../Brand";
import { blurIn, Dim } from "../Caption";
import { clamp, colors, fontFamily } from "../theme";

// Contact details from src/data/company.ts
const CONTACT = [
  "ardigitalsolutions7@gmail.com",
  "+63 927 352 4231",
  "Cebu City, Philippines",
];

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Outro"
      style={{ fontFamily, alignItems: "center", justifyContent: "center" }}
    >
      <Interactive.Div
        name="Card"
        style={{
          position: "relative",
          width: 1680,
          padding: "96px 110px",
          borderRadius: 40,
          border: `1.5px solid ${colors.border}`,
          backgroundColor: "rgba(255,255,255,0.03)",
          overflow: "hidden",
          opacity: interpolate(frame, [0, 12], [0, 1], clamp),
          scale: interpolate(frame, [0, 26], [0.96, 1], {
            ...clamp,
            easing: Easing.spring({ damping: 18 }),
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.09), transparent 65%)",
          }}
        />
        <div style={blurIn(frame, 4, 12)}>
          <Eyebrow>Let's talk</Eyebrow>
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 112,
            fontWeight: 500,
            lineHeight: 0.98,
            letterSpacing: "-0.055em",
            color: colors.text,
            ...blurIn(frame, 8),
          }}
        >
          Have a process that
          <br />
          <Dim>could work better?</Dim>
        </div>
        <div
          style={{
            marginTop: 60,
            display: "flex",
            alignItems: "center",
            gap: 48,
          }}
        >
          <Interactive.Div
            name="Button"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "22px 40px",
              borderRadius: 999,
              backgroundColor: colors.text,
              color: colors.ink,
              fontSize: 32,
              fontWeight: 500,
              ...blurIn(frame, 46, 16),
              scale: interpolate(frame, [76, 80, 88], [1, 0.95, 1], clamp),
            }}
          >
            Start a Project
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </Interactive.Div>
          {CONTACT.map((c, i) => (
            <div
              key={c}
              style={{
                fontSize: 28,
                color: colors.muted,
                ...blurIn(frame, 56 + i * 6, 12),
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </Interactive.Div>
      <Interactive.Div
        name="Wordmark"
        style={{ position: "absolute", bottom: 52, ...blurIn(frame, 96, 12) }}
      >
        <Wordmark size={64} />
      </Interactive.Div>
    </AbsoluteFill>
  );
};
