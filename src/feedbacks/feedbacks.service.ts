import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedbacks.entity';
import { UsersService } from '../users/users.service';
import { LocationsService } from '../locations/locations.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { ExceptionMessage } from '../utils/exception-message.enum';

@Injectable()
export class FeedbacksService {
    constructor(
        @InjectRepository(Feedback)
        private readonly feedbackRepository: Repository<Feedback>,
        private readonly usersService: UsersService,
        private readonly locationsService: LocationsService,
    ) {}

    async createFeedback(
        userId: string,
        locationId: string,
        createFeedbackDto: CreateFeedbackDto,
    ): Promise<Feedback> {
        const user = await this.usersService.getUserById(userId);
        const existingFeedbackByUser = await this.feedbackRepository
            .createQueryBuilder('feedback')
            .leftJoin('feedback.user', 'user')
            .where('user.id = :userId', { userId: user.id })
            .getOne();

        if (existingFeedbackByUser) {
            throw new BadRequestException(ExceptionMessage.USER_ALREADY_LEFT_FEEDBACK);
        }

        const location = await this.locationsService.getLocationById(locationId);

        const feedbackInsertResult = await this.feedbackRepository
            .createQueryBuilder()
            .insert()
            .into(Feedback)
            .values({
                ...createFeedbackDto,
                user,
                location
            })
            .execute();

        const feedbackFormatResponse = feedbackInsertResult.raw[0] as Feedback;
        const feedbackResponse = await this.feedbackRepository.save(feedbackFormatResponse);

        const locationFeedbacks = await this.getFeedbacksByLocation(locationId);

        let totalRating = createFeedbackDto.rate;
        for (const feedback of locationFeedbacks) {
            totalRating += feedback.rate;
        }

        const averageRating = Math.round((totalRating / locationFeedbacks.length) * 10) / 10;
        location.rating = averageRating;
        await this.locationsService.save(location);

        return feedbackResponse;
    }

    async getFeedbacksByLocation(locationId: string): Promise<Array<Feedback>> {
        const location = await this.locationsService.getLocationById(locationId);

        return this.feedbackRepository
            .createQueryBuilder('feedback')
            .leftJoin('feedback.location', 'location')
            .leftJoinAndSelect('feedback.user', 'user')
            .where('location.id = :locationId', { locationId: location.id })
            .getMany();

    }
}
