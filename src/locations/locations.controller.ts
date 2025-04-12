import { Body, Controller, Get, HttpStatus, Param, Post, Query, UseGuards } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './locations.entity';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { LocationsFilterDto } from './dto/locations-filter.dto';
import { LocationCategoriesDto } from './dto/location-types.dto';

@Controller('locations')
export class LocationsController {
    constructor(private readonly locationsService: LocationsService) {}

    @ApiOperation({ summary: 'Create location for interactive map' })
    @ApiResponse({ type: Location, status: HttpStatus.CREATED })
    @ApiBody({ type: CreateLocationDto })
    @Post()
    async creatLocation(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
        return this.locationsService.createLocation(createLocationDto);
    }

    @ApiOperation({ summary: 'Getting locations with filter by tags (toilet, ramp, ...)' })
    @ApiResponse({ type: [Location], status: HttpStatus.OK })
    @Get()
    async getLocationsByTags(
        @Query() locationsFilterDto: LocationsFilterDto,
        @Query() locationCategoriesDto: LocationCategoriesDto,
    ): Promise<Array<Location>> {
        return this.locationsService.getLocationsByTags(locationsFilterDto, locationCategoriesDto);
    }

    @ApiOperation({ summary: 'Getting location by default id' })
    @ApiResponse({ type: [Location], status: HttpStatus.OK })
    @ApiQuery({ type: LocationsFilterDto })
    @Get('defaultId/:locationDefaultId')
    async getLocationByDefaultId(
        @Param('locationDefaultId') locationDefaultId: string
    ): Promise<Location> {
        return this.locationsService.getLocationByDefaultId(locationDefaultId);
    }
}
