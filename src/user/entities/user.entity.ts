import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { IUser } from "../interfaces/user/user.interface";
import { PersonEntity } from "./person.entity";

@Entity({ name: 'user' })
export class UserEntity implements IUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'username',
        unique: false,
        nullable: false
    })
    username: string;

    @Column({
        name: 'email',
        unique: false,
        nullable: false
    })
    email: string;  

    @Column({
        name: 'password',
        unique: false,
        nullable: false
    })
    password: string;

    @Column({
        name: 'type_user',
    })
    typeUser: number;    

    @Column({
        default: true,
        name: 'status'
    })
    status: boolean;

    @Column({ 
        type: 'uuid', 
        unique: true, 
        name: 'reset_password_token', 
        nullable: true
    })
    resetPasswordToken: string;

    @Column({
        default: false,
        name: 'activation_account'
    })
    activationAccount: boolean;  

    @Column({
        type: "uuid",
        unique: true,
        name: 'activation_code'
    })
    activationCode: string;

    @CreateDateColumn({
        type: 'timestamp',
        // default: () => 'NOW()',
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        // default: () => 'NOW()',
        default: () => 'CURRENT_TIMESTAMP(6)',
        name: 'updated_at'
    })
    updatedAt: Date;

  /*
  * Relacion 1:1 con persona
    -------------------------
    INFO: 
    onDelete: 'NO ACTION', onUpdate: 'NO ACTION',
    cascade: ['insert', 'update', 'remove'],
    eager: true    
  */
    @OneToOne(() => PersonEntity, (person) => person.user, {
        cascade: ['update', 'insert']
      })
    @JoinColumn({ name: 'person_id'})
    profile?: PersonEntity;
}
