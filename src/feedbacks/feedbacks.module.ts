import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { Feedback } from './feedbacks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { LocationsModule } from '../locations/locations.module';

@Module({
    providers: [FeedbacksService],
    controllers: [FeedbacksController],
    imports: [
        TypeOrmModule.forFeature([Feedback]),
        UsersModule,
        LocationsModule
    ],
    exports: [FeedbacksService],
})
export class FeedbacksModule {}
