import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { Response } from 'express';
import { UpdateUserDto } from './dto/updateUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const users = await this.userService.findAll();
      return res.status(HttpStatus.OK).json(users);
    } catch (error) {
      console.log(error);
    }
  }

  @Post()
  async createUser(@Body() userCreate: CreateUserDto, @Res() res: Response) {
    try {
      const newUser = await this.userService.createUser(userCreate);
      return res.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('/:id')
  async findUserById(@Res() res: Response, @Param('id') id: number) {
    try {
      const user = await this.userService.findUserById(id);
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  @Put('/:id')
  async updateUser(
    @Res() res: Response,
    @Param('id') id: number,
    @Body() userUpdate: UpdateUserDto,
  ) {
    try {
      const user = await this.userService.updateUser(userUpdate, id);
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('/:id')
  async deleteUser(@Res() res: Response, @Param('id') id: number) {
    try {
      const user = await this.userService.deleteUser(id);
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}
