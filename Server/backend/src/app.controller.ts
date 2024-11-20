import { AppService } from './app.service';
import { Controller, Post, Body, Get, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('gateway')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authService: ClientProxy,
    @Inject('PROFILE_SERVICE') private readonly profileService: ClientProxy,
  ) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
