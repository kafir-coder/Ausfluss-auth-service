import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producer } from '../../producers/entities/producer.entity';
import { Driver } from '../../drivers/entities/driver.entity';

@Entity()
export class Solicitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  budget_proposal: number;

  @Column()
  max_weight: number;

  @Column()
  delivery_expectation_date: string;

  @Column()
  loading_location: string;

  @Column()
  offloading_location: string;

  @ManyToOne(() => Producer, (producer: Producer) => producer.id)
  producer: number;

  @ManyToOne(() => Driver, (driver: Driver) => driver.id)
  driver: number;
}
