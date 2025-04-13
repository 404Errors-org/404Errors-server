import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LOCATIONS_SEEDING_DATA } from './locations.seeding.data';
import { Location } from '../../../locations/locations.entity';

@Injectable()
export class LocationsSeeder {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>
    ) {}

    async execute(): Promise<void> {
        await this.locationRepository.clear();

        for (const locationData of LOCATIONS_SEEDING_DATA) {
            const accessibilityRate = locationData.tags.length;
            
            await this.locationRepository
              .createQueryBuilder()
              .insert()
              .into(Location)
              .values({
                  ...locationData,
                  accessibilityRate,
              })
              .execute();
        }
    }
}