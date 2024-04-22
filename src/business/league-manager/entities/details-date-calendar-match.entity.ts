
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
} from "typeorm";
import { MatchCalendarDatesEntity } from "./match-calendar-dates.entity";

// NOTE: DETALLES FECHA CALENDARIO PARTIDO
@Entity({ name: 'details_date_calendar_match' })
export class DetailsDateCalendarMatchEntity {

    @PrimaryGeneratedColumn()
    id: number;

    // NOTE: TEAM A *************************
    @Column({
        type: 'decimal', 
        name: 'possession_team_a',
        nullable: false
    })
    possessionTeamA: number

    // NOTE: goles equipo a
    @Column({
        name: 'goals_team_a',
        nullable: false,
        type: 'integer',
    })
    goalsTeamA: number

    // NOTE: tiros a puerta
    @Column({
        name: 'kick_to_goal_team_a',
        nullable: false
    })
    kickToGoalTeamA: number

    // NOTE: total tiros tiros equipo a
    @Column({
        name: 'total_shots_team_a',
        nullable: false
    })
    totalShotsTeamA: number

    // NOTE: tiros fuera tiros equipo a
    @Column({
        name: 'shots_off_team_a',
        nullable: false
    })
    shotsOffTeamA: number

    // NOTE: paradas del portero equipo a
    @Column({
        name: 'goalkeeper_saves_team_a',
        nullable: false
    })
    goalKeeperSavesTeamA: number

    // NOTE: saques de esquina equipo a
    @Column({
        name: 'corners_team_a',
        nullable: false
    })
    cornersTeamA: number

    // NOTE: fueras de juego equipo a
    @Column({
        name: 'offsides_team_a',
        nullable: false
    })
    offsidesTeamA: number

    // NOTE: Tarjetas rojas equipo a
    @Column({
        name: 'red_cards_team_a',
        nullable: false
    })
    redCardsTeamA: number

    // NOTE: Asistencias equipo a
    @Column({
        name: 'assists_team_a',
        nullable: false
    })
    assistsTeamA: number

    // NOTE: Sustituciones equipo a
    @Column({
        name: 'substitutions_team_a',
        nullable: false
    })
    substitutionsTeamA: number

    // NOTE: faltas equipo a
    @Column({
        name: 'faults_team_a',
        nullable: false
    })
    faultsTeamA: number

    // NOTE: TEAM B *************************

    @Column({
        type: 'decimal', 
        name: 'possession_team_b',
        nullable: false
    })
    possessionteamB: number

    // NOTE: goles equipo a
    @Column({
        name: 'goals_team_b',
        nullable: false
    })
    goalsTeamB: number

    // NOTE: tiros a puerta
    @Column({
        name: 'kick_to_goal_team_b',
        nullable: false
    })
    kickToGoalTeamB: number

    // NOTE: total tiros tiros equipo a
    @Column({
        name: 'total_shots_team_b',
        nullable: false
    })
    totalShotsTeamB: number

    // NOTE: tiros fuera tiros equipo a
    @Column({
        name: 'shots_off_team_b',
        nullable: false
    })
    shotsOffTeamB: number

    // NOTE: paradas del portero equipo a
    @Column({
        name: 'goalkeeper_saves_team_b',
        nullable: false
    })
    goalKeeperSavesTeamB: number

    // NOTE: saques de esquina equipo a
    @Column({
        name: 'corners_team_b',
        nullable: false
    })
    cornersTeamB: number

    // NOTE: fueras de juego equipo a
    @Column({
        name: 'offsides_team_b',
        nullable: false
    })
    offsidesTeamB: number

    // NOTE: Tarjetas rojas equipo a
    @Column({
        name: 'red_cards_team_b',
        nullable: false
    })
    redCardsTeamB: number

    // NOTE: Asistencias equipo a
    @Column({
        name: 'assists_team_b',
        nullable: false
    })
    assistsTeamB: number

    // NOTE: Sustituciones equipo a
    @Column({
        name: 'substitutions_team_b',
        nullable: false
    })
    substitutionsTeamB: number

    // NOTE: faltas equipo a
    @Column({
        name: 'faults_team_b',
        nullable: false
    })
    faultsTeamB: number

    // NOTE: RELATIONS
    @OneToOne(() => MatchCalendarDatesEntity, (matchCalendarDates) => matchCalendarDates.detailsCalendarMatch, {
        cascade: ['update', 'insert']
      })
    @JoinColumn({ name: 'match_calendar_dates_id'})
    matchCalendarDates?: MatchCalendarDatesEntity;
}
