import { Controller, Get, UseGuards, Req, Res, Post, ValidationPipe, UsePipes, Body, Query } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ApiBody, ApiOkResponse, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'


import { AuthGuard } from '@nestjs/passport'
import { CreateClientDto } from 'interface/Client.dto';
import { CreateOperatorDto } from 'interface/Operator.dto';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const State = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.query.state;
    return request.query;
  },
);


@Controller()
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post('/Client')
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
  async createClientUser(@Body() createUserDto:
    CreateClientDto) {
    return this.authenticationService.
      findOrCreateClientUser(createUserDto);
  }


  @Post('/Operator')
  @ApiOkResponse(
    {
      description: 'User Created',
      type: CreateOperatorDto
    })
  @ApiBody(
    {
      type: CreateOperatorDto,
      description: 'Create User',
      required: true,
    })
  @ApiResponse(
    {
      status: 201,
      description: 'User Created',
      type: CreateOperatorDto
    })
  @UsePipes(ValidationPipe)
  async createOpeartorUser(@Body() createUserDto:
    CreateOperatorDto) {
    return this.authenticationService.
      findOrCreateOperatorUser(createUserDto);
  }


  @Get('auth/google/login')
  async googleAuth(@Req() req, @Res() res) {
    const state = req.query.state;
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      process.env.GOOGLE_CALLBACK_URL,
    )}&scope=email%20profile&state=${state}`;
    res.redirect(googleAuthUrl);
  }


  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(
    @Req() req,
    @Res() res,
  ) {

    const firstLogin = req.user?.firstLogin;
    const accessToken = req.user?.appAccessToken;
    const providerAccessToken = req.user?.providerAccessToken;
    const refreshToken = req.user?.refreshToken;
    console.log('req.user == ', req.user)
    res.cookie('firstLogin', firstLogin)
    res.cookie('access_token', accessToken)
    res.cookie('providerAccessToken', providerAccessToken)
    res.cookie('refreshToken', refreshToken)
    res.redirect(`http://localhost:3000/`)
  }
}
