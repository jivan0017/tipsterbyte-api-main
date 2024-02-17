import {
    IsOptional,
    IsString,
    IsInt 
} from "class-validator"

export class CreateAddressDto {
    @IsString()
    @IsOptional()
    complement: string;

    @IsString()
    numberAddress: string;

    // @IsString()
    // cep: string;

    @IsInt()
    cityId: number;    
}
