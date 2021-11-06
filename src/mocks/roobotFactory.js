import { Factory } from "fishery";
import { name, image, datatype, lorem } from "faker";

const factoryRoobots = Factory.define(({ sequence }) => ({
  id: sequence,
  name: name.firstName(),
  imageSource: image.imageUrl(),
  features: {
    speed: datatype.number({ min: 0, max: 10 }),
    endurance: datatype.number({ min: 0, max: 10 }),
    creationData: lorem.word,
  },
}));

export const randomRoobot = () => factoryRoobots.build();
export const randomRoobots = (total = 5) => factoryRoobots.buildList(total);
