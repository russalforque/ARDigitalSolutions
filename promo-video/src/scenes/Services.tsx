import { Dim } from "../Caption";
import { ScreenScene } from "./ScreenScene";

export const Services: React.FC = () => (
  <ScreenScene
    name="Services"
    label="What we do"
    title={
      <>
        Technology
        <br />
        <Dim>with purpose.</Dim>
      </>
    }
    body="Websites, POS systems and custom business software."
    path="/"
    layers={[{ src: "screens/home-services.jpg" }]}
    shots={[
      { at: 0, x: 800, y: 500, zoom: 1 },
      { at: 22, x: 800, y: 500, zoom: 1 },
      { at: 50, x: 800, y: 470, zoom: 1.45 },
      { at: 85, x: 800, y: 470, zoom: 1.45 },
      { at: 110, x: 800, y: 582, zoom: 1.45 },
      { at: 145, x: 800, y: 582, zoom: 1.45 },
      { at: 170, x: 800, y: 698, zoom: 1.45 },
      { at: 215, x: 800, y: 698, zoom: 1.45 },
      { at: 250, x: 800, y: 500, zoom: 1 },
    ]}
  />
);
