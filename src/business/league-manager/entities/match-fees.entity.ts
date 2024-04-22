
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn, 
    ManyToOne,
} from "typeorm";
import { MatchCalendarDatesEntity } from "./match-calendar-dates.entity";

// NOTE: cuotas partido
@Entity({ name: 'match_fees' })
export class MatchFeesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'decimal', 
        name: 'match_quota_team_a',
        nullable: false
    })
    matchQuotaTeamA: number;

    @Column({
        type: 'decimal', 
        name: 'match_quota_team_b',
        nullable: false
    })
    matchQuotaTeamB: number;

    @Column({
        type: 'decimal', 
        name: 'tie_quota',
        nullable: false
    })
    tieQuota: number;

    @Column({
        type: 'datetime',
        name: 'match_time',
        default: () => 'CURRENT_TIMESTAMP'
    })
    matchTime: Date;

    @Column({
        type: 'datetime', 
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at: Date;    

    @Column({
        nullable: true,
        type: 'enum',
        enum: ['MATCH_WITHOUT_PLAYING', 'MATCH_PLATING_NOW', 'MATCH_OVER'],
        name: 'match_status'
    })
    matchStatus: string;

    // NOTE: RELATIONSHIP
    // NOTE: muchas cuotas de partidos pertenecen a una fecha calendario partido
    @ManyToOne(() => MatchCalendarDatesEntity, matchCalendarDates => matchCalendarDates.matchFeels)
    @JoinColumn({
        name: 'match_calendar_dates_id',
        referencedColumnName: 'id'
    })    
    matchCalendarDates?: MatchCalendarDatesEntity;    
}
