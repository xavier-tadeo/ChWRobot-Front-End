import { render, screen } from "@testing-library/react";
import CardRoobot from "./CardRoobot";

describe("Given a componet CardRoobot", () => {
  describe("When it receives robot", () => {
    test("Then it should render a robot", () => {
      const roobot = {
        features: { speed: 10, endurance: 2, creationDate: "1110" },
        name: "C2P2",
        imageSource: "url",
      };

      render(<CardRoobot roobot={roobot} />);
      const name = screen.getByRole("heading", { name: roobot.name });
      console.log(name);
      const speed = screen.getByText("Speed: " + roobot.features.speed);

      const endurance = screen.getByText(
        "Endurance: " + roobot.features.endurance
      );

      expect(name).toBeInTheDocument();
      expect(speed).toBeInTheDocument();
      expect(endurance).toBeInTheDocument();
    });
  });
});
