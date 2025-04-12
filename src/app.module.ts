import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { EmailModule } from './email/email.module';
import * as dotenv from "dotenv";
import * as process from "node:process";
import { TokensModule } from './tokens/tokens.module';
import {JwtModule} from "@nestjs/jwt";
import { FilesModule } from './files/files.module';
import {MulterModule} from "@nestjs/platform-express";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "node:path";
import { jwtConstants } from './utils/constants';
import { FirebaseModule } from './firebase/firebase.module';
import { DatabaseService } from './database/database.service';
import { DatabaseModule } from './database/database.module';
import { LocationsModule } from './locations/locations.module';
dotenv.config();

@Module({
    controllers: [],
    providers: []   ,
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        FirebaseModule,
        TypeOrmModule.forRootAsync({
            imports: [DatabaseModule],
            inject: [DatabaseService],
            useFactory: (databaseService: DatabaseService) =>
                databaseService.getTypeOrmConfig(),
        }),
        ConfigModule.forRoot(),
        JwtModule.register({
            secret: jwtConstants.secretKey,
            secretOrPrivateKey: jwtConstants.secretKey,
            signOptions: { expiresIn: jwtConstants.signOptions.expiresIn },
            global: true
        }),
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, "..", "uploads")
        }),
        UsersModule,
        AuthModule,
        EmailModule,
        TokensModule,
        FilesModule,
        MulterModule.register({ dest: "./uploads" }),
        LocationsModule],
    exports: [
        TypeOrmModule,
        JwtModule
    ]
})
export class AppModule {}
