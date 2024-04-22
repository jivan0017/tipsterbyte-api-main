
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn, 
    OneToOne,
    OneToMany,
    ManyToOne,
} from "typeorm";
import { TournamentsLeagueEntity } from "./tournaments-league.entity";
import { DetailsDateCalendarMatchEntity } from "./details-date-calendar-match.entity";
import { MatchFeesEntity } from "./match-fees.entity";

// NOTE: FECHAS CALENDARIO PARTIDO
@Entity({ name: 'match_calendar_dates' })
export class MatchCalendarDatesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        nullable: false
    })
    name: string;

    @Column({
        default: true,
        name: 'status'
    })
    status: boolean;

    // NOTE: muchas fechas calendario  partido se asocia con un torneo de liga
    @ManyToOne(() => TournamentsLeagueEntity, tournamentLeague => tournamentLeague.tournamentLeagues)
    @JoinColumn({
        name: 'tournament_league_id',
        referencedColumnName: 'id'
    })    
    tournamentLeague?: TournamentsLeagueEntity;

    /*
    * Relacion 1:1 con detalles fecha calendario partido
    -------------------------
    INFO: 
    onDelete: 'NO ACTION', onUpdate: 'NO ACTION',
    cascade: ['insert', 'update', 'remove'],
    eager: true    
  */
    @OneToOne(() => DetailsDateCalendarMatchEntity, (detailsDateCalendarMatch) => detailsDateCalendarMatch.matchCalendarDates, {
        onUpdate: 'CASCADE'
    })
    detailsCalendarMatch: MatchCalendarDatesEntity;

    // NOTE: una Fecha calendario partido se compone de una o varias cuotas de partido. 
    @OneToMany(
        () => MatchFeesEntity,
        matchFeels => matchFeels.matchCalendarDates
    )
    matchFeels?: MatchFeesEntity[];    
}
