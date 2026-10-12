import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colors } from "./theme";

/** Pure black with a faint drifting grid and the soft white glow from the site's hero. */
export const Background: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      name="Background"
      style={{ backgroundColor: colors.ink, overflow: "hidden" }}
    >
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          backgroundPosition: `${interpolate(frame, [0, 1800], [0, -240])}px 0px`,
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1300,
          height: 1300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 62%)",
          left: 310,
          top: -110,
          translate: `${interpolate(frame, [0, 1800], [-200, 260])}px 0px`,
        }}
      />
    </AbsoluteFill>
  );
};
