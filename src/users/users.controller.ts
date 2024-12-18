import { Controller, Post, Get, Put, Delete, Param, Body, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from 'src/dtos/user.dto';
import { etudiantDto } from 'src/dtos/etudiant.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: userDto) {
    const user = await this.usersService.createUser(userDto);
    if (user) {
      return user;
    }
    throw new HttpException('User not created', HttpStatus.NOT_MODIFIED);
  }

  @Post('student')
  async createEtudiant(@Body() etudiantDto: etudiantDto) {
    const etu = await this.usersService.createEtudiant(etudiantDto);
    if (etu) {
      return etu;
    }
    throw new HttpException('Student not created', HttpStatus.NOT_MODIFIED);
  }

  @Get(':user_id')
  async getInfoUser(@Param('user_id') user_id: number) {
    Logger.log('Retrieving user information', 'UsersController');
    const infoUser = await this.usersService.getInfoUser(user_id);
    if (!infoUser) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return infoUser;
  }

  @Put(':user_id')
  async modifierInfoUser(@Param('user_id') user_id: number, @Body() userDto: userDto) {
    const updatedUser = await this.usersService.modifierInfoUser(user_id, userDto);
    if (!updatedUser) {
      throw new HttpException('User not modified', HttpStatus.NOT_MODIFIED);
    }
    return updatedUser;
  }

  @Delete(':user_id')
  async removeUser(@Param('user_id') user_id: number) {
    const result = await this.usersService.removeUser(user_id);
    if (result) {
      return { message: 'User deleted successfully' };
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
}
