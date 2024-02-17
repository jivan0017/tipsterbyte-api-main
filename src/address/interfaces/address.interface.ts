import { CityEntity } from "../../city/entities/city.entity";
import { UserEntity } from "../../user/entities/user.entity";

export interface IAddress {
    id: number;
    name: string;
    userId: number;
    complement: string;
    numberAddress: string;
    cityId: number;
    createdAt: Date;
    updatedAt: Date;
    user?: UserEntity;
    city?: CityEntity;
}
