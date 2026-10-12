import { Dim } from "../Caption";
import { ScreenScene } from "./ScreenScene";

export const Sellix: React.FC = () => (
  <ScreenScene
    name="Sellix"
    label="Our product"
    title={
      <>
        Sellix POS.
        <br />
        <Dim>All in one place.</Dim>
      </>
    }
    body="Sales, inventory, expenses and reports, even offline."
    path="/"
    layers={[{ src: "screens/home-sellix.jpg" }]}
    shots={[
      { at: 0, x: 800, y: 500, zoom: 1 },
      { at: 30, x: 800, y: 500, zoom: 1 },
      { at: 80, x: 1120, y: 320, zoom: 2.2 },
      { at: 150, x: 1120, y: 320, zoom: 2.2 },
      { at: 210, x: 1120, y: 500, zoom: 2.2 },
      { at: 265, x: 1120, y: 500, zoom: 2.2 },
    ]}
  />
);
