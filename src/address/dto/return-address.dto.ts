import { ReturnCityDto } from "../../city/dto/return-city.dto";
import { AddressEntity } from "../entities/address.entity";

export class ReturnAddressDto {
    complement: string;
    numberAddress: string;
    // cep: string;
    city: ReturnCityDto;

    constructor(address: AddressEntity) {
        this.complement = address.complement;
        this.numberAddress = address.numberAddress;
        // this.cep = address.cep;
        this.city = address.city ? new ReturnCityDto(address.city) : undefined;
    }
}
