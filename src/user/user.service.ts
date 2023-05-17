import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UserRepository } from './user.repository';
import { UpdateUserDto } from './dto/updateUser.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    const users = await this.userRepository.findAll();
    return users;
  }

  async createUser(userCreate: CreateUserDto): Promise<CreateUserDto> {
    const newUser = this.userRepository.createUser(userCreate);
    return newUser;
  }

  async findUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepository.findUserById(id);
    return user;
  }

  async updateUser(
    userUpdate: UpdateUserDto,
    id: number,
  ): Promise<UpdateResult | { message: string }> {
    let { username, password, nome } = userUpdate;
    if (username === '') username = undefined;
    if (password === '') password = undefined;
    if (nome === '') nome = undefined;
    if (
      username === undefined &&
      password === undefined &&
      nome === undefined
    ) {
      return { message: 'Você deve preenchar ao menos um campo!' };
    }
    const user = await this.userRepository.updateUser(
      { username, password, nome },
      id,
    );
    return user;
  }

  async deleteUser(id: number): Promise<DeleteResult> {
    const user = await this.userRepository.deleteUser(id);
    return user;
  }
}
