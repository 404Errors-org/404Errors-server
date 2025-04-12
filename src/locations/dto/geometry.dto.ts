import { ApiProperty } from '@nestjs/swagger';

export class GeometryDto {
    @ApiProperty()
    readonly verticalCoordinate: number;

    @ApiProperty()
    readonly horizontalCoordinate: number;
}