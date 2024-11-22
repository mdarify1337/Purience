import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    OneToMany,
    ManyToMany,
    JoinTable,
    BeforeInsert,
    PrimaryColumn,
    BeforeUpdate,
} from 'typeorm';

// import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'



@Entity('user')
@Unique(['id', 'email'])
export class Operator {
    
}