import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'Data/Client.entity';
import { Operator } from 'Data/Operator.entity';
import { UserType } from 'Data/Usertype.entity';
import { Repository } from 'typeorm';

export class AuthenticationService {
  constructor(private jwtService: JwtService,
    @InjectRepository(Client)
    private readonly ClientRepository: Repository<Client>,
  ) 
  {}
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

  async findOrCreateClientUser(UserClient: Partial<Client>): Promise<{ user: Client; firstLogin: boolean }> {
    let user = await this.ClientRepository.findOne({
      where: { Email: UserClient.Email },
    });
  
    if (user) {
      return { user, firstLogin: false };
    }
    const newUser = this.ClientRepository.create({
      Name: UserClient.Name,
      Email: UserClient.Email,
      ProfilePictureURL: UserClient.ProfilePictureURL,
      Provider: UserClient.Provider,
      userType: UserType.CLIENT,
    });
    if (newUser){
      const savedUser = await this.ClientRepository.save(newUser);
      console.log('Saved user -> ', savedUser);
      return { user: savedUser, firstLogin: true };
    }

  }

  async findAllUsersClient(): Promise<Client[]> {
      console.log('all users  from db -> ',await this.ClientRepository.find());
      return await this.ClientRepository.find();
  }

  async viewUser(id: string): Promise<Client | null> {
      try {
          return await this.ClientRepository.findOne(
              { where: { id} });
      } catch (error) {
          console.error('Error fetching user:', error);
          return null;
      }
  }

    async generateAccessToken(user: any): Promise<any> {
      const payload = {
          user: user.user,
          provider: user.user.provider,
      };
      const accessToken = this.jwtService.sign(payload, {
          secret: process.env.JWT_SECRET,
          expiresIn: '1h',
      });
      const refreshToken = this.jwtService.sign(payload, {
          secret: process.env.REFRESH_SECRET,
          expiresIn: '7d',
      });
      console.log('payload backend -> ', payload);
      return {
          accessToken,
          refreshToken,
      };
  }

}

