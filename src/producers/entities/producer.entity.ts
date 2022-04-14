import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  num_BI: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  address: string;
}
