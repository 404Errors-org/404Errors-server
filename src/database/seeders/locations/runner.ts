import { NestFactory } from '@nestjs/core';
import { LocationsSeeder } from './locations.seeder';
import { Logger } from '@nestjs/common';
import { LocationsSeederModule } from './locations.seeder.module';

const logger: Logger = new Logger('LocationsSeeder');

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(LocationsSeederModule);
    const locationsSeeder = app.get(LocationsSeeder);

    await locationsSeeder.execute();
    await app.close();
}

bootstrap().catch((error) => {
    logger.error('Error seeding locations: ', error);
    process.exit(1);
})
