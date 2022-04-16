import { Driver } from '../../drivers/entities/driver.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['plate'])
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  max_weight_limit: string;

  @Column()
  status: string;

  @ManyToOne(() => Driver, (driver: Driver) => driver.id)
  owner: number;

  @Column({ unique: true })
  plate: string;

  @Column()
  document: string;
}
