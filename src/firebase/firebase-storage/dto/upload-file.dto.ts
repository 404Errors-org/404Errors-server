import { ApiProperty } from '@nestjs/swagger';

export class UploadFileRequestDto {
    @ApiProperty()
    readonly file: Express.Multer.File
}