import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedbacks.entity';
import { UsersService } from '../users/users.service';
import { LocationsService } from '../locations/locations.service';

@Injectable()
export class FeedbacksService {
    constructor(
        @InjectRepository(Feedback)
        private readonly locationRepository: Repository<Feedback>,
        private readonly usersService: UsersService,
        private readonly locationsService: LocationsService,
    ) {}

    // async createFeedback(
    //     userId: string,
    //     locationId: string,
    //     createFeedbackDto: CreateFeedbackDto,
    // ): Promise<Feedback> {
    //     const user = await this.usersService
    // }
}
