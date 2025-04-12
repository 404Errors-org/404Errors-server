import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const jwtConstants =  {
    secretKey: configService.get<string>('JWT_SECRET_KEY') || 'secret',
    signOptions: {
        expiresIn: "336h"
    },
};

export const STORAGE_BUCKETS = {
    DISABILITY_CERTIFICATION: 'disability-certification',
    AVATAR: 'avatar',
} as const;