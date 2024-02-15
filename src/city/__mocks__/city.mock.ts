import { stateMock } from "../../state/__mocks__/state.mock";
import { CityEntity } from "../entities/city.entity";

export const cityMock: CityEntity = {
    id: 1,
    stateId: stateMock.id,
    name: "city test",
    createdAt: new Date(),
    updatedAt: new Date()
}
