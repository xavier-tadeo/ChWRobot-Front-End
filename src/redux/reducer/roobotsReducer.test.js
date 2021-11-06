import { randomRoobots } from "../../mocks/roobotFactory";
import { getRoobotsAction } from "../actions/actionCreators";
import roobotsReducer from "./roobotsReducer";

let roobots;

beforeAll(() => {
  roobots = randomRoobots();
});

describe("Given a roobotsReducer", () => {
  describe("When it receives a list of roobots and get action", () => {
    test("Then it should a new roobots list to equal a roobots list", () => {
      const initialRoobots = [];

      const result = roobotsReducer(initialRoobots, getRoobotsAction(roobots));

      expect(result).toEqual(roobots);
    });
  });
});
