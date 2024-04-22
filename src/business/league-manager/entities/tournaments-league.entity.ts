
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToMany,
    ManyToOne,    
} from "typeorm";
import { LeagueEntity } from "./league.entity";
import { TeamEntity } from "./team.entity";
import { TeamDayClasificationEntity } from "./team-day-clasifiction.entity";
import { ResourcesExtractionLeagueEntity } from "./resources-extraction-league.entity";

// NOTE: TORNEO_LIGA - TORNEOS LIGA
@Entity({ name: 'tournaments_league' })
export class TournamentsLeagueEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        nullable: false
    })
    name: string; 

    @Column({
        name: 'description',
        nullable: false
    })
    description: string; 

    @Column({
        default: true,
        name: 'tournament_status'
    })
    tournamentStatus: boolean;

    // NOTE: muchas ciudades pertenencen a un estado
    @ManyToOne(() => LeagueEntity, league => league.tournamentsLeague)
    @JoinColumn({
        name: 'league_id',
        referencedColumnName: 'id'
    })    
    league?: LeagueEntity;

    // NOTE: un Torneo tiene uno o muchos equipos
    @OneToMany(
        () => TeamEntity,
        team => team.tournamentLeague
    )
    teams?: TeamEntity[];

    // NOTE: una Liga - Torneo se compone de uno o varios items de clasificación torneo
    @OneToMany(
        () => TeamDayClasificationEntity,
        TeamDayClasification => TeamDayClasification.tournamentLeague
    )
    tournamentLeagues?: TeamDayClasificationEntity[];

    // NOTE: un Torneo liga tiene uno o muchas ligas calendario partidos
    @OneToMany(
        () => TeamDayClasificationEntity,
        teamDayClasification => teamDayClasification.tournamentLeague
    )
    teamsDayClasification?: TeamDayClasificationEntity[];

    // NOTE: una liga de torneo tiene uno o varios recursos para la extracción. 
    @OneToMany(
        () => ResourcesExtractionLeagueEntity,
        resourceExtraction => resourceExtraction.tournamentLeague
    )
    resourceExtractions?: ResourcesExtractionLeagueEntity[];
}
