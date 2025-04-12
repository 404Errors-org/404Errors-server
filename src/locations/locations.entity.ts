import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GeometryDto } from './dto/geometry.dto';

@Entity()
export class Location {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @ApiProperty()
    @Column()
    readonly name: string;

    @ApiProperty()
    @Column()
    readonly type: string;

    @ApiProperty()
    @Column({ nullable: true })
    readonly phoneNumber: string;

    @ApiProperty()
    @Column()
    readonly locationDefaultId: string;

    @ApiProperty()
    @Column('text', { array: true })
    readonly tags: Array<string>;

    @ApiProperty({ type: GeometryDto })
    @Column({ type: 'jsonb' })
    readonly geometry: GeometryDto;
}