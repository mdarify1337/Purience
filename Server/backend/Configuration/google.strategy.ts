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

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const State = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.query.state;
    return request.state; // Modify this to return the desired state
  },
);

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        private readonly authenticationService: AuthenticationService,
        @InjectRepository(Client) private readonly ClientRepository: Repository<Client>,
        @InjectRepository(Operator) private readonly operatorRepository: Repository<Operator>,
      ) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            passReqToCallback: true,
            scope: ['email', 'profile'],
        });
    }

    private DetemineTypeofUser(profile: any): UserType {
        if (profile.userType === UserType.CLIENT)
            return UserType.CLIENT;
        return UserType.OPERATOR;
    }

    async validate(
        req: any,
        accessToken: string, 
        refreshToken: string, 
        profile: any, 
        done: VerifyCallback): Promise<any> {
        try {
            const state = req.query.state ? JSON.parse(decodeURIComponent(req.query.state)) : null;
            console.log( 'state ->< ',state)
            if (!state || !state.User) {
                throw new Error('Invalid state parameter');
            }
            const newState = state.User;
            console.log('new state -> ', newState);
            const Name =   profile.name.givenName + ' ' + profile.name.familyName;
            const Email = profile.emails[0].value;
            const ProfilePictureURL = profile._json.picture;
            const Provider = profile.provider;
            let user: any =  await this.ClientRepository.findOne({ where: { Email: Email } });
            if (user)
                return done(null, user);
            user  = await this.operatorRepository.findOne({ where: { Email: Email } });
            if (user)
                return done(null, user);
            const typeUser = this.DetemineTypeofUser(profile);
            console.log("typeUser");
            console.log('profile -> ', profile);
            if (newState === UserType.CLIENT){
                user = await this.authenticationService.findOrCreateClientUser(
                    {
                        Name,
                        Email,
                        ProfilePictureURL,
                        Provider
                    }
                )
            } else if (newState === UserType.OPERATOR) {
                user = await this.authenticationService.findOrCreateOperatorUser(
                    {
                        Name,
                        Email,
                        ProfilePictureURL,
                        Provider
                    }
                )
            }
            const shortLivedAccessToken = await this.authenticationService.generateAccessToken(user);
            return {
                user: user,
                firstLogin: user.firstLogin,
                appAccessToken: shortLivedAccessToken.accessToken,
                providerAccessToken: accessToken,
                refreshToken: shortLivedAccessToken.refreshToken
            }
        } catch(error) {
            done(error, null)
        }
    }
}
