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



@Entity('Operator')
@Unique(['id', 'Email'])
export class Operator {
    @PrimaryGeneratedColumn(
        'uuid',
    )
    id?: string;

    @Column({unique: true})
    Email?: string;

    @Column({ nullable: true })
    Name?: string;

    @Column({ nullable: true })
    CompanyName?: string;

    @Column({ type: 'enum', enum: UserType, default: UserType.OPERATOR })
    userType: UserType;

    @Column({ nullable: true })
    Description?: string;

    @Column({ nullable: true })
    Address?: string;

    @Column({ nullable: true })
    VerificationStatus?: string;

    @Column({ nullable: true })
    Certifications?: string;

    @Column({ nullable: true })
    Password?: string;

    @Column({ nullable: true })
    PhoneNumber?: string;

    @Column({ nullable: true })
    LanguagePreference?: string;

    @Column({ nullable: true })
    ProfilePictureURL?: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    generateUUID() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}