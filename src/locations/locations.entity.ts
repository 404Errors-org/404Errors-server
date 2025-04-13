import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GeometryDto } from './dto/geometry.dto';
import { Feedback } from '../feedbacks/feedbacks.entity';

@Entity()
export class Location {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    category: string;

    @ApiProperty()
    @Column({ nullable: true })
    phoneNumber: string;

    @ApiProperty()
    @Column()
    locationDefaultId: string;

    @ApiProperty()
    @Column({ nullable: true })
    street: string;

    @ApiProperty()
    @Column({ nullable: true })
    webSite: string;

    @ApiProperty()
    @Column('text', { array: true })
    tags: Array<string>;

    @ApiProperty({ type: GeometryDto })
    @Column({ type: 'jsonb' })
    geometry: GeometryDto;

    @ApiProperty()
    @Column({ default: 10 })
    rating: number;

    @ApiProperty()
    @Column({ default: 5 })
    accessibilityRate: number;

    @OneToMany(() => Feedback, feedback => feedback.location, { cascade: true })
    feedbacks: Array<Feedback>;
}