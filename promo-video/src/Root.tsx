import { AbsoluteFill, Composition, Folder } from "remotion";
import { ArdPromo, SCENES } from "./ArdPromo";
import { Background } from "./Background";
import { ArdTextPromo, TEXT_TOTAL_FRAMES } from "./text/ArdTextPromo";
import { FPS, SCENE_IDS, sceneFrames, TOTAL_FRAMES } from "./timeline";

// Standalone scene previews get the same backdrop as the full video
const withBackground = (Scene: React.FC) => {
  const Wrapped: React.FC = () => (
    <AbsoluteFill>
      <Background />
      <Scene />
    </AbsoluteFill>
  );
  return Wrapped;
};

const title = (id: string) => id[0].toUpperCase() + id.slice(1);

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="ArdPromo-Scenes">
        {SCENE_IDS.map((id) => (
          <Composition
            key={id}
            id={title(id)}
            component={withBackground(SCENES[id])}
            width={1920}
            height={1080}
            fps={FPS}
            durationInFrames={sceneFrames(id)}
          />
        ))}
      </Folder>
      <Composition
        id="ArdTextPromo"
        component={ArdTextPromo}
        width={1920}
        height={1080}
        fps={FPS}
        durationInFrames={TEXT_TOTAL_FRAMES}
      />
      <Composition
        id="ArdPromo"
        component={ArdPromo}
        width={1920}
        height={1080}
        fps={FPS}
        durationInFrames={TOTAL_FRAMES}
      />
    </>
  );
};
