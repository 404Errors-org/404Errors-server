import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuggestionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly content: string;
}