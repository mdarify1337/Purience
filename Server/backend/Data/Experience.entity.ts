import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    BeforeInsert,
  } from 'typeorm';
  import { Operator } from './Operator.entity';
  import { v4 as uuidv4 } from 'uuid'
  
  @Entity('Experience')
  export class Experience {
    @PrimaryGeneratedColumn('uuid')
    ExperienceID: string;
  
    @ManyToOne(() => Operator, (operator) => operator.experiences, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'OperatorID' })
    operator: Operator;
  
    @Column()
    Title: string;
  
    @Column({ type: 'text', nullable: true })
    Description: string;
  
    @Column()
    Category: string;
  
    @Column({ type: 'jsonb', nullable: true })
    Location: {
      City: string;
      Country: string;
      Coordinates: { 
                    lat: number; 
                    lng: number 
                };
    };
  
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    Price: number;
  
    @Column()
    Currency: string;
  
    @Column({ type: 'jsonb', nullable: true })
    AvailabilityCalendar: any; 
  
    @Column('text', { array: true, nullable: true })
    Images: string[]; 
  
    @Column('text', { array: true, nullable: true })
    Videos: string[];
  
    @Column({ type: 'text', nullable: true })
    SustainabilityPractices: string;
  
    @CreateDateColumn()
    CreatedAt: Date;
  
    @UpdateDateColumn()
    UpdatedAt: Date;

    @BeforeInsert()
    generateUUID() {
        if (!this.ExperienceID) {
            this.ExperienceID = uuidv4();
        }
    }
  }
  