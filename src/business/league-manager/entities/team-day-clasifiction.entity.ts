
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn, 
    ManyToOne,
    CreateDateColumn,
} from "typeorm";
import { TournamentsLeagueEntity } from "./tournaments-league.entity";
import { TeamEntity } from "./team.entity";

//  NOTE:  CLASIFICACION_JORNADA_EQUIPO
@Entity({ name: 'team_day_clasification' })
export class TeamDayClasificationEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'tournament_name',
        nullable: true
    })
    tournamenName: string; 

    @Column({
        default: true,
        name: 'status'
    })
    status: boolean;

    @Column({
        default: false,
        name: 'match_played_status'
    })
    matchPlayedStatus: boolean;     

    @Column({
        name: 'consecutive_date_number',
        nullable: true,
    })
    conseccutiveDateNumber: number;    

    @CreateDateColumn({ 
        name: 'calendar_year',
        nullable: true
    })
    calendarYear: Date; 

    @CreateDateColumn({ 
        name: 'match_date_and_time',
        nullable: true
    })
    matchDateAndTime: Date;

    @Column({
        name: 'short_date_match', 
        nullable: true
    })
    shortDateMatch: string;    

    // NOTE: RELACIONES :: 

    // NOTE: muchos equipos pertenencen a una clasificación torneo liga
    @ManyToOne(() => TournamentsLeagueEntity, tournamentLeague => tournamentLeague.tournamentLeagues)
    @JoinColumn({
        name: 'tournament_league_id',
        referencedColumnName: 'id'
    })    
    tournamentLeague?: TournamentsLeagueEntity;

    // NOTE: muchos equipos pertenencen a una clasificación jornada equipo
    @ManyToOne(() => TeamEntity, team => team.teamsDayClasificationA)
    @JoinColumn({
        name: 'team_a_id',
        referencedColumnName: 'id'
    })    
    teamA?: TeamEntity;

    // NOTE: muchos equipos pertenencen a una clasificación jornada equipo
    @ManyToOne(() => TeamEntity, team => team.teamsDayClasificationB)
    @JoinColumn({
        name: 'team_b_id',
        referencedColumnName: 'id'
    })    
    teamB?: TeamEntity;      
}
