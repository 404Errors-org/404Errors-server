import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export class Location {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @ApiProperty()
    @Column()
    readonly name: string;

    @ApiProperty()
    @Column()
    readonly phoneNumber: string;

    @ApiProperty()
    @Column()
    readonly locationDefaultId: string;

    @ApiProperty()
    @Column('text', { array: true })
    readonly tags: Array<string>;
}