import { Dim } from "../Caption";
import { ScreenScene } from "./ScreenScene";

export const Projects: React.FC = () => (
  <ScreenScene
    name="Projects"
    label="Selected work"
    title={
      <>
        Built
        <br />
        <Dim>for impact.</Dim>
      </>
    }
    body="AR experiences, product viewers and business platforms."
    path="/projects"
    layers={[
      { src: "screens/projects-grid.jpg" },
      { src: "screens/projects-grid-hover.jpg", in: [62, 76] },
    ]}
    shots={[
      { at: 0, x: 800, y: 500, zoom: 1 },
      { at: 30, x: 800, y: 500, zoom: 1 },
      { at: 80, x: 500, y: 330, zoom: 1.6 },
      { at: 130, x: 500, y: 330, zoom: 1.6 },
      { at: 185, x: 1100, y: 720, zoom: 1.6 },
    ]}
    cursor={{
      path: [
        { at: 20, x: 1000, y: 900 },
        { at: 60, x: 520, y: 260 },
        { at: 130, x: 540, y: 300 },
        { at: 180, x: 1120, y: 700 },
      ],
      clicks: [],
    }}
  />
);
