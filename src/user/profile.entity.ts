import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Profile {
  @PrimaryGeneratedColumn() //注解
  id: number;

  @Column()
  gender: number;

  @Column()
  photo: string;

  @Column()
  address: string;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
