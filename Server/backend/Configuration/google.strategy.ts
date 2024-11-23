import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { AuthenticationService } from 'Authentication/authentication.service';
import { Client } from 'Data/Client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operator } from 'Data/Operator.entity';
import { UserType } from 'Data/Usertype.entity';


@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        private readonly authenticationService: AuthenticationService,
        @InjectRepository(Client) private readonly clientRepository: Repository<Client>,
        @InjectRepository(Operator) private readonly operatorRepository: Repository<Operator>,
      ) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['email', 'profile'],
        });
    }

    private DetemineTypeofUser(profile: any): UserType {
        if (profile.userType === UserType.CLIENT)
            return UserType.CLIENT;
        return UserType.OPERATOR;
    }

    async validate(
        accessToken: string, 
        refreshToken: string, 
        profile: any, 
        done: VerifyCallback): Promise<any> {
        try {
            const Name = profile.name.familyName + ' ' + profile.name.givenName;
            const Email = profile.emails[0].value;
            const ProfilePictureURL = profile._json.picture;
            const Provider = profile.provider;
            var User = await this.authenticationService.findOrCreateClientUser(
                {
                    Name,
                    Email,
                    ProfilePictureURL,
                    Provider
                }
            )
            const shortLivedAccessToken = await this.authenticationService.generateAccessToken(User);
            return {
                user: User.user,
                firstLogin: User.firstLogin,
                appAccessToken: shortLivedAccessToken.accessToken,
                providerAccessToken: accessToken,
                refreshToken: shortLivedAccessToken.refreshToken
            }
            console.log('user -> user ', User);
            
        } catch(error) {
            done(error, null)
        }
    }
}