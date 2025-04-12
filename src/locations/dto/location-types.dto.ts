import { ApiProperty } from '@nestjs/swagger';

export class LocationCategoriesDto {
    @ApiProperty()
    readonly categories: Array<string>;
}