import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocationTagsDto {
    @ApiProperty()
    readonly tags: Array<string>;
}