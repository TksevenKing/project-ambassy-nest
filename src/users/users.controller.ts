import { Controller, Post, Get, Put, Delete, Param, Body, HttpException, HttpStatus, Logger, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { userDto } from 'src/dtos/user.dto';
import { etudiantDto } from 'src/dtos/etudiant.dto';
import { ressortissantDto } from 'src/dtos/ressortissant.dto';
import { employeDto } from 'src/dtos/employeAmbassade.dto';

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

  @Post('ressortissant')
  async createRessortissant(@Body() ressortissantDto: ressortissantDto) {
    const ressortissant = await this.usersService.createRessortissant(ressortissantDto);

    if (ressortissant) {
      return ressortissant;
    }
    throw new HttpException('Ressortissant not created', HttpStatus.NOT_MODIFIED);
  }

  @Post('employee')
  async createEmploye(@Body() employeDto: employeDto) {
    const employe = await this.usersService.createEmploye(employeDto);

    if (employe) {
      return employe;
    }
    throw new HttpException('Employee not created', HttpStatus.NOT_MODIFIED);
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

  @Get('search/email')
  async findUsersByEmail(@Query('email') email: string) {
    const users = await this.usersService.findUsersByEmail(email);
    if (!users.length) {
      throw new HttpException('No users found with this email', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  @Get('search/role')
  async findUsersByRole(@Query('type') role: string) {
    const users = await this.usersService.findUsersByRole(role);
    if (!users.length) {
      throw new HttpException('No users found with this role', HttpStatus.NOT_FOUND);
    }
    return users;
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
