import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './user.interface';

@Entity()
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  nome: string;
}
