import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]  // ajout du UserService to the exports[] in order to be accessible outside of this module
})
export class UsersModule {}
