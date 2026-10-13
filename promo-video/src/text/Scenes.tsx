import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { BrandMark, Eyebrow } from "../Brand";
import { clamp, colors, ease, fontFamily, inOut } from "../theme";
import {
  beats,
  Chip,
  exit,
  Marker,
  reveal,
  RollWord,
  useVertical,
} from "./kit";

const center: React.CSSProperties = {
  fontFamily,
  alignItems: "center",
  justifyContent: "center",
  color: colors.text,
};
const big: React.CSSProperties = {
  fontWeight: 500,
  letterSpacing: "-0.055em",
  lineHeight: 1,
};

/** "Still running your business on notebooks? spreadsheets? logbooks? paper?" */
export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const words = ["notebooks?", "spreadsheets?", "logbooks?", "paper?"];
  const lead = ["Still running", "your business", "on"];
  const strike = beats(6.5);

  return (
    <AbsoluteFill style={{ ...center, gap: 30 }}>
      <div
        style={{
          display: "flex",
          flexDirection: v ? "column" : "row",
          alignItems: "center",
          gap: v ? 6 : 22,
          fontSize: v ? 72 : 64,
          ...big,
          color: colors.muted,
        }}
      >
        {lead.map((w, i) => (
          <span key={w} style={reveal(frame, beats(i * 0.5), 30)}>
            {w}
          </span>
        ))}
      </div>
      <div
        style={{
          position: "relative",
          height: v ? 150 : 230,
          width: v ? 1000 : 1500,
          fontSize: v ? 124 : 210,
          ...big,
          textAlign: "center",
        }}
      >
        {words.map((w, i) => (
          <RollWord
            key={w}
            frame={frame}
            at={beats(2 + i)}
            until={i < words.length - 1 ? beats(3 + i) : undefined}
            style={{
              left: "50%",
              translate: undefined,
              transform: "translateX(-50%)",
            }}
          >
            <span
              style={{
                position: "relative",
                color:
                  i === 3 && frame > strike + 6 ? colors.faint : colors.text,
              }}
            >
              {w}
              {i === 3 ? (
                <span
                  style={{
                    position: "absolute",
                    left: -12,
                    right: -12,
                    top: "55%",
                    height: 12,
                    backgroundColor: colors.text,
                    transformOrigin: "0 50%",
                    scale: `${interpolate(frame, [strike, strike + 9], [0, 1], { ...clamp, easing: ease })} 1`,
                  }}
                />
              ) : null}
            </span>
          </RollWord>
        ))}
      </div>
    </AbsoluteFill>
  );
};

/** Logo slam on the drop, then the name and location. */
export const Brand: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const ring = interpolate(frame, [0, 22], [0, 1], clamp);

  return (
    <AbsoluteFill style={{ ...center, gap: 44 }}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 200,
            height: 200,
            marginLeft: -100,
            marginTop: -100,
            borderRadius: 48,
            border: `3px solid ${colors.text}`,
            scale: interpolate(ring, [0, 1], [1, 2.2], { easing: ease }),
            opacity: 1 - ring,
          }}
        />
        <div
          style={{
            scale: interpolate(frame, [0, 16], [1.6, 1], {
              ...clamp,
              easing: Easing.spring({ damping: 14 }),
              output: "perceptual-scale",
            }),
            opacity: interpolate(frame, [0, 4], [0, 1], clamp),
          }}
        >
          <BrandMark size={200} />
        </div>
      </div>
      <div style={{ display: "flex", fontSize: v ? 76 : 110, ...big }}>
        {"AR Digital Solutions".split("").map((ch, i) => (
          <span
            key={i}
            style={{ whiteSpace: "pre", ...reveal(frame, 8 + i * 1.2, 30) }}
          >
            {ch}
          </span>
        ))}
      </div>
      <div style={reveal(frame, beats(3.5), 16)}>
        <Eyebrow style={{ justifyContent: "center" }}>
          Cebu City, Philippines
        </Eyebrow>
      </div>
    </AbsoluteFill>
  );
};

/** "We build" with a slot of what they build. */
export const Build: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const words = [
    "websites.",
    "POS systems.",
    "booking apps.",
    "dashboards.",
    "custom software.",
  ];

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        paddingLeft: v ? 80 : 200,
        color: colors.text,
      }}
    >
      <div
        style={{
          fontSize: v ? 60 : 72,
          ...big,
          color: colors.dim,
          ...reveal(frame, 0, 30),
        }}
      >
        We build
      </div>
      <div
        style={{
          position: "relative",
          height: v ? 116 : 210,
          fontSize: v ? 98 : 196,
          ...big,
          marginTop: 10,
        }}
      >
        {words.map((w, i) => (
          <RollWord
            key={w}
            frame={frame}
            at={beats(1 + i * 1.6)}
            until={i < words.length - 1 ? beats(2.6 + i * 1.6) : undefined}
          >
            {i === words.length - 1 ? (
              <Marker frame={frame} at={beats(8.2)}>
                {w}
              </Marker>
            ) : (
              w
            )}
          </RollWord>
        ))}
      </div>
      <div
        style={{
          marginTop: 70,
          display: "flex",
          gap: 16,
          ...reveal(frame, beats(8.6), 16),
        }}
      >
        <Chip frame={frame} at={beats(8.6)}>
          Built around how you work
        </Chip>
      </div>
    </AbsoluteFill>
  );
};

/** Sellix POS: four words slam into a grid, then collapse into one product. */
export const Sellix: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const words = ["Sales.", "Inventory.", "Expenses.", "Reports."];
  const merge = beats(4.5);
  const dim = interpolate(frame, [merge, merge + 8], [1, 0], clamp);

  return (
    <AbsoluteFill style={center}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: v ? "760px" : "repeat(2, 760px)",
          rowGap: 10,
          fontSize: 150,
          ...big,
          opacity: dim,
          filter: `blur(${(1 - dim) * 16}px)`,
        }}
      >
        {words.map((w, i) => (
          <div
            key={w}
            style={{
              ...reveal(frame, beats(i), 50),
              scale: interpolate(frame, [beats(i), beats(i) + 10], [1.15, 1], {
                ...clamp,
                easing: ease,
              }),
            }}
          >
            {w}
          </div>
        ))}
      </div>
      <AbsoluteFill style={{ ...center, gap: 50 }}>
        <div
          style={{
            fontSize: 60,
            ...big,
            color: colors.muted,
            ...reveal(frame, merge, 20),
          }}
        >
          All in one place:
        </div>
        <div
          style={{
            fontSize: v ? 150 : 200,
            ...big,
            ...reveal(frame, merge + 4, 40),
          }}
        >
          <Marker frame={frame} at={merge + 8}>
            Sellix POS
          </Marker>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: v ? "column" : "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Chip frame={frame} at={beats(6.5)}>
            Works offline
          </Chip>
          <Chip frame={frame} at={beats(7)}>
            Android ready
          </Chip>
          <Chip frame={frame} at={beats(7.5)}>
            Cashier accounts
          </Chip>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

/** "Built for" with a fast roll through the industries. */
export const Industries: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const words = [
    "retail stores.",
    "cafés.",
    "laundry shops.",
    "salons.",
    "property rentals.",
  ];
  const end = beats(6.5);

  return (
    <AbsoluteFill
      style={{
        fontFamily,
        justifyContent: "center",
        paddingLeft: v ? 80 : 200,
        color: colors.text,
      }}
    >
      <div
        style={{
          fontSize: v ? 60 : 72,
          ...big,
          color: colors.dim,
          ...reveal(frame, 0, 30),
        }}
      >
        Built for
      </div>
      <div
        style={{
          position: "relative",
          height: v ? 116 : 210,
          fontSize: v ? 98 : 196,
          ...big,
          marginTop: 10,
        }}
      >
        {words.map((w, i) => (
          <RollWord
            key={w}
            frame={frame}
            at={beats(0.5 + i)}
            until={beats(1.5 + i)}
          >
            {w}
          </RollWord>
        ))}
        <RollWord frame={frame} at={end}>
          <Marker frame={frame} at={end + 6}>
            real businesses.
          </Marker>
        </RollWord>
      </div>
    </AbsoluteFill>
  );
};

// From src/data/company.ts
const STATS = [
  { value: 3, suffix: "+", label: "Projects delivered" },
  { value: 4, suffix: "+", label: "Digital experiences" },
  { value: 2, suffix: "+", label: "Industries" },
  { value: 100, suffix: "%", label: "Commitment" },
];

/** Count-up stats in a row with hairline dividers. */
export const Stats: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();

  return (
    <AbsoluteFill style={center}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: v ? "repeat(2, 440px)" : "repeat(4, 400px)",
          rowGap: v ? 90 : 0,
        }}
      >
        {STATS.map((s, i) => {
          const at = beats(i * 0.75);
          const n = Math.round(
            interpolate(frame, [at, at + beats(1.5)], [0, s.value], {
              ...clamp,
              easing: Easing.out(Easing.cubic),
            }),
          );
          return (
            <div
              key={s.label}
              style={{
                padding: "0 44px",
                borderLeft:
                  i % (v ? 2 : 4) ? `1.5px solid ${colors.border}` : undefined,
                ...reveal(frame, at, 30),
              }}
            >
              <div
                style={{
                  fontSize: 170,
                  ...big,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {n}
                <span style={{ color: colors.faint }}>{s.suffix}</span>
              </div>
              <div
                style={{
                  marginTop: 18,
                  fontSize: 26,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: colors.dim,
                }}
              >
                {s.label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

/** Understand → Plan → Build → Launch, lit in turn along a progress line. */
export const Process: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const steps = ["Understand", "Plan", "Build", "Launch"];
  const cue = (i: number) => beats(0.5 + i * 1.25);
  const progress = interpolate(frame, [cue(0), cue(3) + 10], [0, 1], {
    ...clamp,
    easing: inOut,
  });

  return (
    <AbsoluteFill style={{ ...center, gap: 70 }}>
      <div style={reveal(frame, 0, 16)}>
        <Eyebrow>How we work</Eyebrow>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: v ? "column" : "row",
          alignItems: "center",
          gap: v ? 18 : 34,
          fontSize: v ? 120 : 104,
          ...big,
        }}
      >
        {steps.map((s, i) => {
          const lit = frame >= cue(i);
          return (
            <div
              key={s}
              style={{
                display: "flex",
                flexDirection: v ? "column" : "row",
                alignItems: "center",
                gap: v ? 18 : 34,
                ...reveal(frame, 2 + i * 2, 20),
              }}
            >
              {i ? (
                <span
                  style={{
                    fontSize: 70,
                    color: lit ? colors.text : colors.faint,
                  }}
                >
                  {v ? "↓" : "→"}
                </span>
              ) : null}
              <span
                style={{
                  color: lit ? colors.text : colors.faint,
                  scale: interpolate(
                    frame,
                    [cue(i), cue(i) + 5, cue(i) + 12],
                    [1, 1.08, 1],
                    clamp,
                  ),
                }}
              >
                {s}
              </span>
            </div>
          );
        })}
      </div>
      <div
        style={{
          width: v ? 800 : 1500,
          height: 3,
          backgroundColor: colors.border,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transformOrigin: "0 50%",
            scale: `${progress} 1`,
            backgroundColor: colors.text,
            boxShadow: "0 0 18px rgba(255,255,255,0.6)",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

/** The company tagline, then the call to action. */
export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const v = useVertical();
  const lines = ["Modern Websites.", "Custom Systems.", "Real Results."];
  const cta = beats(5);

  return (
    <AbsoluteFill style={center}>
      {frame < cta + 10 ? (
        <AbsoluteFill
          style={{
            ...center,
            gap: 4,
            ...(frame >= cta ? exit(frame, cta, 40) : {}),
          }}
        >
          {lines.map((l, i) => (
            <div
              key={l}
              style={{
                fontSize: v ? 104 : 170,
                ...big,
                color: i < 2 ? colors.faint : colors.text,
                ...reveal(frame, beats(i), 50),
              }}
            >
              {i === 2 ? (
                <Marker frame={frame} at={beats(2) + 8}>
                  {l}
                </Marker>
              ) : (
                l
              )}
            </div>
          ))}
        </AbsoluteFill>
      ) : null}
      {frame >= cta ? (
        <AbsoluteFill style={{ ...center, gap: 46 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
              ...reveal(frame, cta + 4, 20),
            }}
          >
            <BrandMark size={v ? 80 : 96} />
            <span
              style={{
                fontSize: v ? 46 : 56,
                ...big,
                letterSpacing: "-0.03em",
              }}
            >
              AR Digital Solutions
            </span>
          </div>
          <div
            style={{
              fontSize: v ? 160 : 180,
              ...big,
              ...reveal(frame, cta + 10, 40),
            }}
          >
            Let's talk.
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: v ? "column" : "row",
              alignItems: "center",
              gap: v ? 28 : 40,
              ...reveal(frame, cta + 20, 20),
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "20px 38px",
                borderRadius: 999,
                backgroundColor: colors.text,
                color: colors.ink,
                fontSize: 32,
                fontWeight: 500,
              }}
            >
              Start a Project ↗
            </span>
            <span style={{ fontSize: 32, color: colors.muted }}>
              ardigitalsolutions7@gmail.com
            </span>
            <span style={{ fontSize: 32, color: colors.muted }}>
              +63 927 352 4231
            </span>
          </div>
        </AbsoluteFill>
      ) : null}
    </AbsoluteFill>
  );
};
