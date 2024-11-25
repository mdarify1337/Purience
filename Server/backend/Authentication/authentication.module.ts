import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import {ConfigModule} from "@nestjs/config";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { GoogleStrategy } from "Configuration/google.strategy";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "Data/Client.entity";
import { Operator } from "Data/Operator.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Client, Operator]),
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true,
        }),
        PassportModule.register({ defaultStrategy: 'google'}),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET || 'defaultSecret',
            signOptions: {
                expiresIn: '15m'
            }
        }),
        HttpModule
    ],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, GoogleStrategy, JwtService],
    exports: [AuthenticationService, JwtModule]
    
})
export class AuthenticationModule {}