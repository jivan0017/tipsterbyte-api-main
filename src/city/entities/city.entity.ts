import { PersonEntity } from "../../user/entities/person.entity";
import { StateEntity } from "../../location/entities/state.entity";
import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne,
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    OneToOne,
} from "typeorm";

@Entity({ name: 'city' })
export class CityEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({        
        name: 'state_id',
        nullable: false
    })
    stateId: number;

    @Column({
        name: 'name',
        nullable: false
    })
    name: string;
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    // NOTE: una ciudad tiene una o varias direcciones
    // @OneToMany(() => AddressEntity, addresses => addresses.city)
    // addresses?: AddressEntity[];

    // INFO: muchas ciudades pertenencen a un estado
    @ManyToOne(() => StateEntity, state => state.cities)
    @JoinColumn({
        name: 'state_id',
        referencedColumnName: 'id'
    })    
    state?: StateEntity;

    // INFO: Una ciudad está asociada con una persona que es quien tiene la referencia de ciudad (city_id)
    @OneToOne(() => PersonEntity, (person) => person.city, {
        onUpdate: 'CASCADE'
    })
    person?: PersonEntity;
}
