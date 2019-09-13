import { LoginUserDto } from './users/dto/login-user.dto';
import { UsersService } from './users/users.service';
import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './users/dto/create-user.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
