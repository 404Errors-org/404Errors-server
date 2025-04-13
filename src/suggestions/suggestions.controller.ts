import { Body, Controller, Get, HttpStatus, Param, Post, Query, UseGuards } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { Suggestion } from './suggestions.entity';
import { UserId } from '../decorators/user-id.decorator';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('suggestions')
export class SuggestionsController {
    constructor(private readonly suggestionsService: SuggestionsService) {}

    @ApiOperation({ summary: 'Creating suggestion for disabled people for change of accessibility rate' })
    @ApiResponse({ type: Suggestion, status: HttpStatus.CREATED })
    @ApiBody({ type: CreateSuggestionDto })
    @ApiQuery({ name: 'locationId', type: 'string' })
    @ApiBearerAuth()
    @Post()
    async createSuggestion(
        @UserId() userId: string,
        @Query('locationId') locationId: string,
        @Body() createSuggestionDto: CreateSuggestionDto,
    ): Promise<Suggestion> {
        return this.suggestionsService.createSuggestion(userId, locationId, createSuggestionDto);
    }

    @ApiOperation({ summary: 'Getting suggestions by location' })
    @ApiResponse({ type: Suggestion, status: HttpStatus.OK })
    @ApiParam({ name: 'locationId', type: 'string' })
    @ApiBearerAuth()
    @Get('location/:locationId')
    async getSuggestionsByLocation(@Param('locationId') locationId: string): Promise<Array<Suggestion>> {
        return this.suggestionsService.getSuggestionsByLocation(locationId);
    }
}
