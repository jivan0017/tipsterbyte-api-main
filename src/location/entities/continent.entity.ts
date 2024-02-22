import { 
    Column, 
    OneToMany,
    Entity, 
    PrimaryGeneratedColumn,
} from "typeorm";
import { CountryEntity } from "./country.entity";

@Entity({ name: 'continent' })
export class ContinentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name', 
        nullable: false
    })
    name: string;

    // NOTE: un Continente se compone de uno o varios países. 
    @OneToMany(
        () => CountryEntity,
        country => country.continent
    )
    countries?: CountryEntity[];
}
