import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './locations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { ExceptionMessage } from '../utils/exception-message.enum';
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
                .andWhere('category IN (:...categories)', { categories: locationCategoriesDto.categories });
        }

        if (
            locationsFilterDto.tags
            && locationsFilterDto.tags.length
        ) {
            getLocationsQuery
                .andWhere('tags @> :tags', { tags: locationsFilterDto.tags });
        }

        return await getLocationsQuery.getMany();
    }

    async getLocationById(id: string): Promise<Location> {
        const location = await this.locationRepository
            .createQueryBuilder()
            .where('id = :id', { id })
            .getOne();

        if (!location) {
            throw new NotFoundException(ExceptionMessage.LOCATION_NOT_FOUND);
        }
        return location;
    }

    async save(locationEntity: Location): Promise<Location> {
        return this.locationRepository.save(locationEntity);
    }
}
