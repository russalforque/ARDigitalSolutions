import { Audio } from "@remotion/media";
import { AbsoluteFill, interpolate, Sequence, staticFile } from "remotion";
import { Background } from "../Background";
import { beats, useVertical } from "./kit";
import {
  Brand,
  Build,
  Hook,
  Industries,
  Outro,
  Process,
  Sellix,
  Stats,
} from "./Scenes";

// Scene lengths in beats; hard cuts land on the beat, and the drums enter as the logo hits
export const TEXT_SCENES = [
  { id: "hook", beats: 8, component: Hook },
  { id: "brand", beats: 6, component: Brand },
  { id: "build", beats: 10, component: Build },
  { id: "sellix", beats: 9, component: Sellix },
  { id: "industries", beats: 9, component: Industries },
  { id: "stats", beats: 6, component: Stats },
  { id: "process", beats: 7, component: Process },
  { id: "outro", beats: 13, component: Outro },
];

const startBeat = (index: number) =>
  TEXT_SCENES.slice(0, index).reduce((sum, s) => sum + s.beats, 0);
export const TEXT_TOTAL_FRAMES = beats(startBeat(TEXT_SCENES.length));

export const ArdTextPromo: React.FC = () => {
  const v = useVertical();
  return (
    <AbsoluteFill>
      <Background />
      <Audio
        src={staticFile("music.mp3")}
        volume={(f) =>
          0.8 *
          interpolate(f, [TEXT_TOTAL_FRAMES - 50, TEXT_TOTAL_FRAMES], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })
        }
      />
      {/* On Reels, keep text clear of the caption and buttons along the bottom */}
      <AbsoluteFill style={v ? { top: 40, bottom: 300 } : undefined}>
        {TEXT_SCENES.map((s, i) => {
          const from = beats(startBeat(i));
          const Scene = s.component;
          return (
            <Sequence
              key={s.id}
              name={s.id}
              from={from}
              durationInFrames={beats(startBeat(i + 1)) - from}
            >
              <Scene />
            </Sequence>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
