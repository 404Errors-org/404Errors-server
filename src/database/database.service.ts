import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/users.entity';
import { Token } from '../tokens/tokens.entity';
import { DatabaseFile } from '../files/files.entity';
import { join } from 'path';
import { Location } from '../locations/locations.entity';

@Injectable()
export class DatabaseService {
    constructor(private configService: ConfigService) {}

    getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('PGHOST'),
            port: this.configService.get<number>('PGPORT'),
            username: this.configService.get<string>('PGUSER'),
            password: this.configService.get<string>('PGPASSWORD'),
            database: this.configService.get<string>('PGDATABASE'),
            entities: [User, Token, DatabaseFile, Location],
            synchronize: true,
            migrations: [join(__dirname, 'migrations/*.{js,ts}')],
            logging: true,
            ssl: {
                rejectUnauthorized: false,
            },
        };
    }
}
