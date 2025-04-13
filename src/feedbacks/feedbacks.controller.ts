import { Body, Controller, Get, HttpStatus, Param, Post, Query, UseGuards } from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './feedbacks.entity';
import { FeedbacksService } from './feedbacks.service';
import { ApiBearerAuth, ApiBody, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('feedbacks')
export class FeedbacksController {
    constructor(private feedbackService: FeedbacksService) {}

    @ApiResponse({ type: Feedback, status: HttpStatus.CREATED })
    @ApiBody({ type: CreateFeedbackDto })
    @ApiQuery({ name: 'locationId', type: String })
    @ApiBearerAuth()
    @Post()
    async createFeedback(
        @UserId() userId: string,
        @Query() locationId: string,
        @Body() createFeedbackDto: CreateFeedbackDto
    ): Promise<Feedback> {
        return this.feedbackService.createFeedback(userId, locationId, createFeedbackDto);
    }

    @ApiResponse({ type: [Feedback], status: HttpStatus.OK })
    @ApiParam({ name: 'locationId', type: String })
    @ApiBearerAuth()
    @Get('/location/:locationId')
    async getFeedbacksByLocation(@Param('locationId') locationId: string): Promise<Array<Feedback>> {
        return this.feedbackService.getFeedbacksByLocation(locationId);
    }
}