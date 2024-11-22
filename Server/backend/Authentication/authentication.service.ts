import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

export class AuthenticationService {
  constructor(private jwtService: JwtService) {}
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }
    return {
      message: 'User Info from Google',
      user: req.user
    }
  }
  hello() {
    return "Hello"
  }
}

