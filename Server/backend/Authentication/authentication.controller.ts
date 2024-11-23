import { Controller, Get, UseGuards, Req, Res, Post, ValidationPipe, UsePipes, Body } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'


import { AuthGuard } from '@nestjs/passport'
import { CreateClientDto } from 'interface/Client.dto';

@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post()
  @ApiOkResponse(
    { 
      description: 'User Created', 
      type: CreateClientDto
    })
  @ApiBody(
    {
      type: CreateClientDto, 
      description: 'Create User', 
      required: true,
    })
  @ApiResponse(
    { 
      status: 201, 
      description: 'User Created', 
      type: CreateClientDto
    })
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateClientDto) {
    return this.authenticationService.findOrCreateClientUser(createUserDto);
  }

  
  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    const firstLogin = req.user?.firstLogin;
    const accessToken = req.user?.appAccessToken;
    const providerAccessToken = req.user?.providerAccessToken;
    const refreshToken = req.user?.refreshToken;
    console.log('req.user == ' ,req.user)
    res.cookie('firstLogin', firstLogin)
    res.cookie('access_token', accessToken)
    res.cookie('providerAccessToken', providerAccessToken)
    res.cookie('refreshToken', refreshToken)
    res.redirect(`http://localhost:3000/`)
  }
}
