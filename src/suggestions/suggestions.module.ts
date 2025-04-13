import { Module } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsController } from './suggestions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Suggestion } from './suggestions.entity';
import { UsersModule } from '../users/users.module';
import { LocationsModule } from '../locations/locations.module';

@Module({
    providers: [SuggestionsService],
    controllers: [SuggestionsController],
    imports: [
        TypeOrmModule.forFeature([Suggestion]),
        UsersModule,
        LocationsModule,
    ]
})
export class SuggestionsModule {}
