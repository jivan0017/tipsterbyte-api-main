
import { 
    Column, 
    Entity, 
    PrimaryGeneratedColumn,
} from "typeorm";

// @Entity({ name: 'oraculo' })
export class OraculoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'name',
        nullable: false
    })
    name: string;

    @Column({
        name: 'name_three',
        nullable: false
    })
    nameThree: string;

    @Column({
        nullable: true,
        type: 'enum',
        enum: ['A', 'B', 'C', 'D', 'E'],
        default: 'A'
    })
    cactegory: string;

    @Column({
        default: true,
        name: 'status'
    })
    status: boolean;    
}
