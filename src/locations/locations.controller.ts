import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { Location } from './locations.entity';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { LocationsFilterDto } from './dto/locations-filter.dto';
import { LocationCategoriesDto } from './dto/location-types.dto';
import { UpdateLocationTagsDto } from './dto/update-location-tags.dto';
import { DisabledPersonGuard } from '../common/guards/disabled-person.guard';

@Controller('locations')
export class LocationsController {
    constructor(private readonly locationsService: LocationsService) {}

    @ApiOperation({ summary: 'Create location for interactive map' })
    @ApiResponse({ type: Location, status: HttpStatus.CREATED })
    @ApiBody({ type: CreateLocationDto })
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    @Post()
    async creatLocation(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
        return this.locationsService.createLocation(createLocationDto);
    }

    @ApiOperation({ summary: 'Getting locations with filter by tags (toilet, ramp, ...)' })
    @ApiResponse({ type: [Location], status: HttpStatus.OK })
    @Get()
    async getLocationsByTags(
        @Query('tags') rawTags?: string,
        @Query('categories') rawCategories?: string,
    ): Promise<Array<Location>> {
        const locationsFilterDto: LocationsFilterDto = { tags: rawTags ? JSON.parse(rawTags) : [] };
        const locationCategoriesDto: LocationCategoriesDto = { categories: rawCategories ? JSON.parse(rawCategories) : [] };

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

    @ApiOperation({ summary: 'Updating location tags and change of its rating' })
    @ApiResponse({ type: Location, status: HttpStatus.OK })
    @ApiParam({ name: 'id', type: 'string' })
    @ApiBody({ type: UpdateLocationTagsDto })
    @UseGuards(AuthGuard, DisabledPersonGuard)
    @Patch(':id')
    async updateLocationTags(
        @Param('id') id: string,
        @Body() updateLocationTags: UpdateLocationTagsDto
    ): Promise<Location> {
        return this.locationsService.updateLocationTags(id, updateLocationTags);
    }
}
