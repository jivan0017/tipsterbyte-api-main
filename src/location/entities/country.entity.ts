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

@Entity({ name: 'country' })
export class CountryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name', 
        nullable: false
    })
    name: string;

    // INFO: muchas ciudades pertenencen a un estado
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
}
