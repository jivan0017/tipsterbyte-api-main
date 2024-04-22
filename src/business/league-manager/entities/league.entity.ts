
import { CountryEntity } from "../../../location/entities/country.entity";
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn, 
    OneToMany,
    ManyToOne,
} from "typeorm";
import { TournamentsLeagueEntity } from "./tournaments-league.entity";

@Entity({ name: 'league' })
export class LeagueEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        nullable: false
    })
    name: string; 

    @Column({
        nullable: true,
        type: 'enum',
        enum: ['A', 'B', 'C', 'D', 'E'],
        default: 'A'
    })
    category: string;

    @Column({
        default: true,
        name: 'status'
    })
    status: boolean;

    // NOTE: muchas ligas se asocian a un país
    @ManyToOne(() => CountryEntity, country => country.leagues)
    @JoinColumn({
        name: 'country_id',
        referencedColumnName: 'id'
    })    
    country?: CountryEntity;

    // NOTE: Una liga tiene uno o varios torneos activos
    @OneToMany(
        () => TournamentsLeagueEntity,
        tournamentLeague => tournamentLeague.league
    )
    tournamentsLeague?: TournamentsLeagueEntity[];    
}
