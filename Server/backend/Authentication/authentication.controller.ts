import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

import { AuthGuard } from '@nestjs/passport'

@Controller()
export class AuthenticationController {
  constructor(private readonly appService: AuthenticationService) { }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }
}