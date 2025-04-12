import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { UsersService } from '../../users/users.service';
import { UploadFileResponseDto } from './dto/upload-file-response.dto';

@Injectable()
export class FirebaseStorageService {

    private readonly firebaseStorage: admin.storage.Storage;

    constructor(
        @Inject("FIREBASE_ADMIN")
        private readonly firebaseAdmin: admin.app.App,
        private readonly usersService: UsersService
    ) {
        this.firebaseStorage = this.firebaseAdmin.storage();
    }

    async uploadFile(
        userId: string,
        bucketName: string,
        file: Express.Multer.File
    ): Promise<UploadFileResponseDto> {
        try {
            const bucket = this.firebaseStorage.bucket();
            const filePath = `uploads/${bucketName}/${userId}`;

            const fileUpload = bucket.file(filePath);
            await fileUpload.save(file.buffer, { metadata: { contentType: file.mimetype, } });

            const expiresDate = new Date();
            const [url] = await fileUpload.getSignedUrl({
                action: 'read',
                expires: expiresDate.setFullYear(expiresDate.getFullYear() + 2)
            });

            return { url };
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }

    async deleteAvatar(userId: string): Promise<void> {
        const user = await this.usersService.getUserById(userId);
        const bucket = this.firebaseStorage.bucket();
        await bucket.file(user.avatarImageUrl).delete();

        user.avatarImageUrl = null;
        user.isAvatarSet = false;
        await this.usersService.saveUser(user);
    }

}