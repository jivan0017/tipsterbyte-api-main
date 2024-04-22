import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { CityEntity } from "../../location/entities/city.entity";


@Entity('person')
export class PersonEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'full_name', 
        nullable: true,
    })
    fullName: string; // NOMBRE COMPLETO

    @Column({
        name: 'first_name', 
        nullable: true,
    })
    firstName: string; // PRIMER NOMBRE

    @Column({
        name: 'last_name', 
        nullable: true,
    })
    lastName: string; // APELLIDO

    // TODO: se agrega el tipo: "CC: Cédula de ciudadanía"
    @Column({
        name: 'identification_type', 
        nullable: true,
        type: 'enum',
        enum: ['CUIT', 'DNI', 'CC'],
        default: 'CC'
    })
    identificationType: string; 

    @Column("varchar", { 
        length: 13 , 
        nullable: true,
        name: 'identification_number', 
    })
    identificationNumber: string;

    @Column({
        name: 'phone_number', 
        nullable: true
    })
    phoneNumber: string; // TELEFONO

    @Column({
        name: 'cell_number', 
        nullable: true
    })
    cellNumber: string; // TELEFONO CELULAR

    @Column({
        name: 'createdAt', 
        type: 'datetime', 
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: Date;
    
    @OneToOne(() => UserEntity, (user) => user.profile, {
        onUpdate: 'CASCADE'
    })
    user: UserEntity;

    @OneToOne(() => CityEntity, (city) => city.person, {
        cascade: ['update', 'insert']
    })    
    @JoinColumn({ name: 'city_id'})
    city?: CityEntity;  
}
