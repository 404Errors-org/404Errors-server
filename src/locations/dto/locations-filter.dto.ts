import { ApiProperty } from '@nestjs/swagger';

export class LocationsFilterDto {
    @ApiProperty()
    readonly tags: Array<string>;
}