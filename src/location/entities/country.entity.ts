import { StateEntity } from "./state.entity";
import { 
    Column, 
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    JoinColumn, 
    ManyToOne,    
} from "typeorm";
import { ContinentEntity } from "./continent.entity";
import { LeagueEntity } from "../../business/league-manager/entities/league.entity";

@Entity({ name: 'country' })
export class CountryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name', 
        nullable: false
    })
    name: string;

    // NOTE: muchos paises pertenencen a un continente
    @ManyToOne(() => ContinentEntity, continent => continent.countries)
    @JoinColumn({
        name: 'continent_id',
        referencedColumnName: 'id'
    })    
    continent?: ContinentEntity;

    // NOTE: un país se compone de uno o varios estados/deptos.
    @OneToMany(
        () => StateEntity,
        state => state.country
    )
    states?: StateEntity[];

    // NOTE: un País puede tener una o varias ligas de distintas categorías
    @OneToMany(
        () => LeagueEntity,
        league => league.country
    )
    leagues?: LeagueEntity[];    
}
