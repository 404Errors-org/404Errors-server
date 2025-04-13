import { ApiProperty } from '@nestjs/swagger';
import { Max, Min } from 'class-validator';

export class CreateFeedbackDto {
    @ApiProperty()
    readonly content: string;

    @ApiProperty()
    @Min(1)
    @Max(10)
    readonly rate: number;
}