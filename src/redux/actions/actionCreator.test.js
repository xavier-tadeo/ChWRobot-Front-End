import { randomRoobots } from "../../mocks/roobotFactory";
import { getRoobotsAction } from "./actionCreators";
import actionsTypes from "./actionTypes";

let roobots;

beforeAll(() => {
  roobots = randomRoobots;
});

describe("Given a getRoobotsAction", () => {
  describe("When it receives a list of roobots", () => {
    test("Then should return roobots with the roobots recived", () => {
      const expected = {
        type: actionsTypes.getRoobots,
        roobots,
      };

      const result = getRoobotsAction(roobots);

      expect(result).toEqual(expected);
    });
  });
});
