import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  vehicle_id: number;

  @Column()
  photo_url: string;
}
