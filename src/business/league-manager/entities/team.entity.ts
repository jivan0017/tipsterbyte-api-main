
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn, 
    ManyToOne,
    OneToMany, 
} from "typeorm";
import { TournamentsLeagueEntity } from "./tournaments-league.entity";
import { TeamDayClasificationEntity } from "./team-day-clasifiction.entity";

@Entity({ name: 'team' })
export class TeamEntity {

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
        name: 'status'
    })
    status: boolean;    

    @Column({
        name: 'url_shield_image',
        nullable: false
    })
    urlShieldImage: string;    

    // NOTE: muchos equipos pertenecen a un torneo
    @ManyToOne(() => TournamentsLeagueEntity, tournamentLeague => tournamentLeague.teams)
    @JoinColumn({
        name: 'tournament_league_id',
        referencedColumnName: 'id'
    })
    tournamentLeague?: TournamentsLeagueEntity;

    // NOTE: un Equipo Forma una o varias jornadas de clasificación
    @OneToMany(
        () => TeamDayClasificationEntity,
        teamDayClasification => teamDayClasification.teamA
    )
    teamsDayClasificationA?: TeamDayClasificationEntity[];

    // NOTE: un Equipo Forma una o varias jornadas de clasificación
    @OneToMany(
        () => TeamDayClasificationEntity,
        teamDayClasification => teamDayClasification.teamA
    )
    teamsDayClasificationB?: TeamDayClasificationEntity[];    
}
