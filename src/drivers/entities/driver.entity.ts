import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column({ default: true })
  num_BI: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  driver_id: string;

  @Column()
  driver_type: string;

  @Column()
  adress: string;
}
