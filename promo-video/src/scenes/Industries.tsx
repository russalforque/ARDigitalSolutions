import {
  AbsoluteFill,
  Interactive,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { Eyebrow } from "../Brand";
import { blurIn, Dim } from "../Caption";
import { clamp, colors, ease, fontFamily } from "../theme";

// From the homepage's "Who we help" section
const INDUSTRIES = [
  { name: "Retail & Hardware", note: "Faster checkout, accurate inventory" },
  { name: "Cafés & Restaurants", note: "Order-taking, reporting, shifts" },
  { name: "Laundry Shops", note: "Booking and order tracking" },
  { name: "Salons", note: "Appointments and service records" },
  { name: "Property Rentals", note: "Bookings, billing and reports" },
];
// Each row lights up as the narrator names it
const CUES = [20, 44, 62, 84, 100];

export const Industries: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill name="Industries" style={{ fontFamily }}>
      <div
        style={{
          position: "absolute",
          left: 110,
          top: 0,
          bottom: 0,
          width: 560,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 28,
        }}
      >
        <Interactive.Div name="Label" style={blurIn(frame, 4, 12)}>
          <Eyebrow>Who we help</Eyebrow>
        </Interactive.Div>
        <Interactive.Div
          name="Title"
          style={{
            fontSize: 84,
            fontWeight: 500,
            lineHeight: 0.98,
            letterSpacing: "-0.05em",
            color: colors.text,
            ...blurIn(frame, 9),
          }}
        >
          Built for
          <br />
          <Dim>real businesses.</Dim>
        </Interactive.Div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 760,
          right: 110,
          top: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {INDUSTRIES.map((row, i) => {
          const cue = CUES[i];
          const next = CUES[i + 1] ?? 10000;
          const active = interpolate(
            frame,
            [cue, cue + 8, next, next + 10],
            [0, 1, 1, 0.55],
            clamp,
          );
          return (
            <Interactive.Div
              key={row.name}
              name={row.name}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 40,
                padding: "26px 0",
                borderTop: `1.5px solid ${colors.border}`,
                ...blurIn(frame, cue - 6, 24),
              }}
            >
              <span style={{ width: 50, fontSize: 22, color: colors.faint }}>
                0{i + 1}
              </span>
              <span
                style={{
                  fontSize: 62,
                  fontWeight: 500,
                  letterSpacing: "-0.04em",
                  color: active > 0.6 ? colors.text : colors.dim,
                  translate: `${interpolate(active, [0, 1], [0, 14], { easing: ease })}px 0px`,
                }}
              >
                {row.name}
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 24,
                  color: colors.dim,
                  opacity: active,
                }}
              >
                {row.note}
              </span>
            </Interactive.Div>
          );
        })}
        <div
          style={{
            height: 1.5,
            backgroundColor: colors.border,
            opacity: interpolate(frame, [100, 112], [0, 1], clamp),
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
