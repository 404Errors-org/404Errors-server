import { ApiProperty } from '@nestjs/swagger';

export class CreateLocationDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly type: string;

    @ApiProperty()
    readonly phoneNumber: string;

    @ApiProperty()
    readonly locationDefaultId: string;

    @ApiProperty()
    readonly tags: Array<string>;
}