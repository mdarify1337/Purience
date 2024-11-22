import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import {ConfigModule} from "@nestjs/config";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        PassportModule.register({ defaultStrategy: 'google' }),
        JwtModule.register({
            global: true,
            secret: process.env.JWTSECRET,
            signOptions: {
                expiresIn: '15m'
            }
        }),
        HttpModule
    ],
    controllers: [],
    providers: [ ],
    exports: []
})
export class AuthenticationModule {}