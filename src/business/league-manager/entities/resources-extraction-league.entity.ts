
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { TournamentsLeagueEntity } from "./tournaments-league.entity";

// NOTE: cuotas partido
@Entity({ name: 'match_fees' })
export class ResourcesExtractionLeagueEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'web_font_name', 
        nullable: false
    })
    webFontName: string;

    @Column({
        name: 'description_resource', 
        nullable: false
    })
    descriptionResource: string;

    @Column({
        name: 'url_resource', 
        nullable: false
    })
    urlResource: string;

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

    // NOTE: Órden de ejecución
    @Column({
        name: 'execution_order',
        nullable: false
    })
    executionOrder: number    

    /* 
        resource working
        paused resource
        damaged resource
        resource off    
    */
    @Column({
        nullable: true,
        type: 'enum',
        enum: [
            'WORKING_RESOURCE', 
            'PAUSED_RESOURCE', 
            'DAMAGED_RESOURCE', 
            'OFF_RESOURCE'
        ],
        name: 'resource_status'
    })
    resourceStatus: string;

    // NOTE: RELATIONSHIP
    // NOTE: muchos recursos para la extracción pertenecen a un torneo de liga
    @ManyToOne(() => TournamentsLeagueEntity, tournamentLeague => tournamentLeague.resourceExtractions)
    @JoinColumn({
        name: 'tournament_league_id',
        referencedColumnName: 'id'
    })    
    tournamentLeague?: TournamentsLeagueEntity;

}
