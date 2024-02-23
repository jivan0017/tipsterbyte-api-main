import { CountryEntity } from "./country.entity";
import { CityEntity } from "./city.entity";
import { Column, 
    CreateDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    JoinColumn, 
    ManyToOne,
} from "typeorm";

@Entity({ name: 'state' })
export class StateEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name', 
        nullable: false
    })
    name: string;
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    // INFO: muchas ciudades pertenencen a un estado
    @ManyToOne(() => CountryEntity, country => country.continent)
    @JoinColumn({
        name: 'country_id',
        referencedColumnName: 'id'
    })    
    country?: CountryEntity;

    // NOTE: un estado se compone de una o varias ciudades
    @OneToMany(
        () => CityEntity,
        city => city.state
    )
    cities?: CityEntity[];
}
