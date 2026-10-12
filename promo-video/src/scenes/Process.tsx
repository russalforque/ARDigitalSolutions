import {
  AbsoluteFill,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Eyebrow } from "../Brand";
import { blurIn, Dim } from "../Caption";
import { clamp, colors, ease, fontFamily, inOut } from "../theme";

// From the homepage's "How we work" section
const STEPS = [
  {
    title: "Understand",
    description: "We learn how your business currently operates.",
  },
  {
    title: "Plan",
    description: "We map out the right solution for your workflow and budget.",
  },
  { title: "Build", description: "We design and develop the system with you." },
  {
    title: "Launch",
    description: "We deploy the solution and support you after launch.",
  },
];
// Frames where the narrator reaches each step
const CUES = [22, 66, 108, 148];
const WIDTH = 1700;

export const Process: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(
    frame,
    [CUES[0], CUES[1], CUES[2], CUES[3], CUES[3] + 30],
    [0, 0.25, 0.5, 0.75, 1],
    {
      ...clamp,
      easing: inOut,
    },
  );

  return (
    <AbsoluteFill
      name="Process"
      style={{ fontFamily, alignItems: "center", justifyContent: "center" }}
    >
      <div
        style={{
          width: WIDTH,
          display: "flex",
          flexDirection: "column",
          gap: 90,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <Interactive.Div name="Label" style={blurIn(frame, 2, 12)}>
            <Eyebrow>How we work</Eyebrow>
          </Interactive.Div>
          <Interactive.Div
            name="Title"
            style={{
              fontSize: 96,
              fontWeight: 500,
              letterSpacing: "-0.05em",
              color: colors.text,
              ...blurIn(frame, 6),
            }}
          >
            A simple process. <Dim>Start to launch.</Dim>
          </Interactive.Div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ height: 1.5, backgroundColor: colors.border }} />
          <div
            style={{
              position: "absolute",
              top: -1,
              left: 0,
              height: 3.5,
              width: WIDTH * progress,
              backgroundColor: colors.text,
              boxShadow: "0 0 18px rgba(255,255,255,0.6)",
            }}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 48,
              marginTop: 36,
            }}
          >
            {STEPS.map((step, i) => {
              const cue = CUES[i];
              const lit = interpolate(frame, [cue, cue + 10], [0, 1], clamp);
              return (
                <Interactive.Div
                  key={step.title}
                  name={step.title}
                  style={{ ...blurIn(frame, 8 + i * 5, 20) }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      color: lit > 0.5 ? colors.text : colors.faint,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <div
                    style={{
                      marginTop: 16,
                      fontSize: 58,
                      fontWeight: 500,
                      letterSpacing: "-0.04em",
                      color: lit > 0.5 ? colors.text : colors.faint,
                      translate: `0px ${interpolate(lit, [0, 1], [10, 0], { easing: ease })}px`,
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      marginTop: 14,
                      fontSize: 27,
                      lineHeight: 1.45,
                      color: colors.dim,
                      opacity: 0.35 + lit * 0.65,
                    }}
                  >
                    {step.description}
                  </div>
                </Interactive.Div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
