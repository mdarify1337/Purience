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
import { v4 as uuidv4 } from 'uuid'
import { UserType } from './Usertype.entity';


@Entity('Client')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column({ nullable: true })
    Name?: string;

    @Column({ unique: true })
    Email?: string;

    @Column({ nullable: true }) // Allow null passwords for OAuth users
    Password?: string;

    @Column({ type: 'enum', enum: UserType, default: UserType.CLIENT })
    userType: UserType;

    @Column({ nullable: true }) // Optional for OAuth users
    PhoneNumber?: string;

    @Column({ nullable: true }) // Optional for OAuth users
    Provider?: string;

    @Column({ nullable: true }) // Optional for OAuth users
    LanguagePreference?: string;

    @Column({ nullable: true }) // Optional for OAuth users
    ProfilePictureURL?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    firstLogin: any;

    @BeforeInsert()
    generateUUID() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
