import { Module } from '@nestjs/common';
import { LocationsSeeder } from './locations.seeder';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from '../../../locations/locations.entity';
import { DatabaseModule } from '../../database.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from '../../database.service';

@Module({
    providers: [LocationsSeeder],
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        TypeOrmModule.forRootAsync({
            imports: [DatabaseModule],
            inject: [DatabaseService],
            useFactory: (databaseService: DatabaseService) =>
                databaseService.getTypeOrmConfig(),
        }),
        TypeOrmModule.forFeature([Location])
    ],
    exports: [LocationsSeeder]
})
export class LocationsSeederModule {}