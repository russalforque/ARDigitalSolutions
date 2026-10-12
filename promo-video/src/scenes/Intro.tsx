import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Wordmark } from "../Brand";
import { blurIn } from "../Caption";
import { clamp, colors, ease, fontFamily } from "../theme";

// The manual work the site promises to replace
const WORDS = ["Notebooks.", "Spreadsheets.", "Manual work."];
const OUT = 92;

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const wordsOut = interpolate(frame, [OUT, OUT + 14], [1, 0], clamp);

  return (
    <AbsoluteFill
      name="Intro"
      style={{ fontFamily, alignItems: "center", justifyContent: "center" }}
    >
      <AbsoluteFill
        style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          opacity: wordsOut,
          filter: `blur(${interpolate(frame, [OUT, OUT + 14], [0, 16], clamp)}px)`,
        }}
      >
        {WORDS.map((word, i) => {
          const strike = 48 + i * 7;
          return (
            <Interactive.Div
              key={word}
              name={word}
              style={{
                position: "relative",
                fontSize: 150,
                fontWeight: 500,
                letterSpacing: "-0.06em",
                lineHeight: 1.02,
                color:
                  interpolate(frame, [strike, strike + 10], [0, 1], clamp) > 0.5
                    ? colors.faint
                    : colors.text,
                ...blurIn(frame, 4 + i * 9, 40),
              }}
            >
              {word}
              <div
                style={{
                  position: "absolute",
                  left: -10,
                  right: -10,
                  top: "54%",
                  height: 8,
                  backgroundColor: colors.text,
                  transformOrigin: "0 50%",
                  scale: `${interpolate(frame, [strike, strike + 12], [0, 1], { ...clamp, easing: ease })} 1`,
                }}
              />
            </Interactive.Div>
          );
        })}
      </AbsoluteFill>

      <AbsoluteFill
        style={{ alignItems: "center", justifyContent: "center", gap: 36 }}
      >
        <Interactive.Div
          name="Wordmark"
          style={{
            opacity: interpolate(frame, [OUT + 8, OUT + 22], [0, 1], clamp),
            scale: interpolate(frame, [OUT + 8, OUT + 34], [0.88, 1], {
              ...clamp,
              easing: Easing.spring({ damping: 16 }),
              output: "perceptual-scale",
            }),
            filter: `blur(${interpolate(frame, [OUT + 8, OUT + 26], [16, 0], clamp)}px)`,
          }}
        >
          <Wordmark size={150} />
        </Interactive.Div>
        <Interactive.Div
          name="Tagline"
          style={{
            fontSize: 30,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: colors.dim,
            ...blurIn(frame, OUT + 22, 16),
          }}
        >
          There's a better way
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
