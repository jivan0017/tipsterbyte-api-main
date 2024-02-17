import { CityEntity } from "../../city/entities/city.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { IAddress } from "../interfaces/address.interface";

@Entity({ name: 'address' })
export class AddressEntity implements IAddress{
    name: string;
    @PrimaryGeneratedColumn()
    id: number;

    @Column({        
        name: 'user_id',
        nullable: false
    })
    userId: number;

    @Column({
        name: 'complement',
        nullable: true
    })
    complement: string;

    @Column({
        name: 'number',
        nullable: false
    })
    numberAddress: string;

    @Column({        
        name: 'city_id',
        nullable: false
    })
    cityId: number;
    
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    // INFO: muchas direcciones pertenencen a un usuario
    @ManyToOne(() => UserEntity, user => user.addresses)
    @JoinColumn({
        name: 'user_id',
        referencedColumnName: 'id'
    })
    user?: UserEntity;

    // INFO: muchas direcciones pertenencen a una ciudad
    @ManyToOne(() => CityEntity, city => city.addresses)
    @JoinColumn({
        name: 'city_id',
        referencedColumnName: 'id'
    })    
    city?: CityEntity;
}