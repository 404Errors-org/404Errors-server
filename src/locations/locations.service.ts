import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './locations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { ExceptionMessage } from '../utils/exception-message.enum';
import { User } from '../users/users.entity';
import { LocationsFilterDto } from './dto/locations-filter.dto';
import { LocationCategoriesDto } from './dto/location-types.dto';

@Injectable()
export class LocationsService {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>,
    ) {}

    async createLocation(createLocationDto: CreateLocationDto): Promise<Location> {
        const location = await this.getLocationByDefaultId(createLocationDto.locationDefaultId);
        if (location) {
            throw new BadRequestException(ExceptionMessage.LOCATION_ALREADY_EXISTS);
        }

        const locationInsertResult: InsertResult = await this.locationRepository
          .createQueryBuilder()
          .insert()
          .into(Location)
          .values(createLocationDto)
          .execute();

        const locationResponse = locationInsertResult.raw[0] as Location;
        return await this.locationRepository.save(locationResponse);
    }

    async getLocationByDefaultId(locationDefaultId: string): Promise<Location | null> {
        return this.locationRepository
            .createQueryBuilder()
            .where('locationDefaultId := locationDefaultId', { locationDefaultId })
            .getOne();
    }

    async getLocationsByTags(
        locationsFilterDto: LocationsFilterDto,
        locationCategoriesDto: LocationCategoriesDto
    ): Promise<Array<Location>> {
        const getLocationsQuery = this.locationRepository.createQueryBuilder();

        if (
            locationCategoriesDto.categories
            && locationCategoriesDto.categories.length
        ) {
            getLocationsQuery
                .andWhere('type IN (:...categories)', { categories: locationCategoriesDto.categories });
        }

        if (
            locationsFilterDto.tags
            && locationsFilterDto.tags.length
        ) {
            getLocationsQuery
                .andWhere('tags @> ARRAY[:...tags]', { tags: locationsFilterDto.tags });
        }

        return await getLocationsQuery.getMany();
    }
}
