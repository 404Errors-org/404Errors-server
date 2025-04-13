import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Suggestion } from './suggestions.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { LocationsService } from '../locations/locations.service';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { ExceptionMessage } from '../utils/exception-message.enum';

@Injectable()
export class SuggestionsService {
    constructor(
        @InjectRepository(Suggestion)
        private readonly suggestionRepository: Repository<Suggestion>,
        private readonly usersService: UsersService,
        private readonly locationsService: LocationsService,
    ) {}

    async createSuggestion(
        userId: string,
        locationId: string,
        createSuggestionDto: CreateSuggestionDto,
    ): Promise<Suggestion> {
        const user = await this.usersService.getUserById(userId);
        const location = await this.locationsService.getLocationById(locationId);

        const existingSuggestion = await this.suggestionRepository
            .createQueryBuilder('suggestion')
            .leftJoin('suggestion.user', 'user')
            .leftJoin('suggestion.location', 'location')
            .where('user.id = :userId', { userId: user.id })
            .andWhere('location.id = :locationId', { locationId: location.id })
            .getOne();

        if (existingSuggestion) {
            throw new BadRequestException(ExceptionMessage.USER_ALREADY_LEFT_SUGGESTION);
        }

        const suggestionInsertResult = await this.suggestionRepository
            .createQueryBuilder()
            .insert()
            .into(Suggestion)
            .values({
                ...createSuggestionDto,
                user,
                location
            })
            .execute();

        const suggestion = suggestionInsertResult.raw[0] as Suggestion;
        return await this.suggestionRepository.save(suggestion);
    }

    async getSuggestionsByLocation(locationId: string): Promise<Array<Suggestion>> {
        const location = await this.locationsService.getLocationById(locationId);

        return this.suggestionRepository
            .createQueryBuilder('suggestion')
            .leftJoin('suggestion.location', 'location')
            .leftJoinAndSelect('suggestion.user', 'user')
            .where('location.id = :locationId', { locationId: location.id })
            .getMany();
    }
}
