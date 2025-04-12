import { Controller, Delete, HttpStatus, Post, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FirebaseStorageService } from './firebase-storage.service';
import { UserId } from '../../decorators/user-id.decorator';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '../../auth/auth.guard';
import { UploadFileResponseDto } from './dto/upload-file-response.dto';

@UseGuards(AuthGuard)
@Controller('file-storage')
export class FirebaseStorageController {
    constructor(private readonly firebaseStorageService: FirebaseStorageService) {}

    @ApiOperation({ summary: "Uploading file" })
    @ApiResponse({ status: HttpStatus.CREATED, type: UploadFileResponseDto })
    @ApiQuery({ name: 'bucketName', type: 'string' })
    @ApiBearerAuth()
    @UseInterceptors(FileInterceptor('file'))
    @Post('upload')
    async uploadFile(
        @UserId() userId: string,
        @Query('bucketName') bucketName: string,
        @UploadedFile() file: Express.Multer.File
    ): Promise<UploadFileResponseDto> {
        return this.firebaseStorageService.uploadFile(userId, bucketName, file);
    }

    @ApiOperation({ summary: "Deleting avatar image" })
    @ApiBearerAuth()
    @ApiQuery({ name: "filePath", type: String })
    @Delete('delete')
    async deleteFile(@UserId() userId: string): Promise<void> {
        return this.firebaseStorageService.deleteAvatar(userId);
    }
}
