import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/updateUser.dto';

export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    const users = await this.repository.find();
    return users;
  }

  async createUser({ username, nome, password }): Promise<UserEntity> {
    const user = await this.repository.save({
      username,
      nome,
      password,
    });
    return user;
  }

  async findUserById(id: any): Promise<UserEntity> {
    console.log(id);
    const user = await this.repository.findOne({
      select: ['id', 'username', 'nome'],
      where: { id },
    });
    return user;
  }

  async updateUser(
    updateUser: UpdateUserDto,
    id: number,
  ): Promise<UpdateResult> {
    const user = await this.repository.update(id, updateUser);
    return user;
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    const user = await this.repository.delete(id);
    return user;
  }
}
