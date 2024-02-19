import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn,
  OneToOne
} from "typeorm";
import { UserEntity } from "./user.entity";


@Entity('persons')
export class PersonEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  full_name: string; // NOMBRE COMPLETO

  @Column({nullable: true})
  first_name: string; // PRIMER NOMBRE

  @Column({nullable: true})
  last_name: string; // APELLIDO

  // TODO: se agrega el tipo: "CC: Cédula de ciudadanía"
  @Column({
    nullable: true,
    type: 'enum',
    enum: ['CUIT', 'DNI', 'CC'],
    default: 'CC'
  })
  identification_type: string; 

  @Column("varchar", { 
    length: 13 , 
    nullable: true
  })
  identification_number: string;

  @Column({nullable: true})
  phone_number: string; // TELEFONO

  @Column({nullable: true})
  cell_number: string; // TELEFONO CELULAR

  @Column({
    type: 'datetime', 
    default: () => 'CURRENT_TIMESTAMP'
  })
  created_at: Date;
  
  @OneToOne(() => UserEntity, (user) => user.profile, {
    onUpdate: 'CASCADE'
  })
  user: UserEntity;
}
