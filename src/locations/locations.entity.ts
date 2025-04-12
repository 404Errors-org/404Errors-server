import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GeometryDto } from './dto/geometry.dto';

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

    @ApiProperty({ type: GeometryDto })
    @Column()
    readonly geometry: GeometryDto;
}