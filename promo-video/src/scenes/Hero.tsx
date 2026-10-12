import { AbsoluteFill, useCurrentFrame } from "remotion";
import { cameraAt } from "../camera";
import { BrowserFrame, Cursor, enterStyle } from "../Device";
import { fontFamily } from "../theme";

// The real homepage hero, shown large with a slow push into the headline and the CTA
export const Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const camera = cameraAt(frame, [
    { at: 0, x: 800, y: 500, zoom: 1 },
    { at: 40, x: 800, y: 500, zoom: 1 },
    { at: 105, x: 620, y: 490, zoom: 1.55 },
    { at: 140, x: 620, y: 490, zoom: 1.55 },
    { at: 185, x: 1200, y: 640, zoom: 1.9 },
  ]);

  return (
    <AbsoluteFill
      name="Hero"
      style={{ fontFamily, alignItems: "center", justifyContent: "center" }}
    >
      <div style={enterStyle(frame, 0)}>
        <BrowserFrame
          width={1500}
          path="/"
          camera={camera}
          layers={[{ src: "screens/home-hero.jpg" }]}
        >
          {(scale) => (
            <Cursor
              scale={scale}
              path={[
                { at: 150, x: 1420, y: 820 },
                { at: 190, x: 1170, y: 645 },
              ]}
              clicks={[198]}
            />
          )}
        </BrowserFrame>
      </div>
    </AbsoluteFill>
  );
};
