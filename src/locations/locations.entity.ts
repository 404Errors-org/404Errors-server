import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { GeometryDto } from './dto/geometry.dto';
import { Feedback } from '../feedbacks/feedbacks.entity';

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
    readonly category: string;

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

    @ApiProperty()
    @Column({ default: 10 })
    readonly rating: number;

    @ApiProperty()
    @Column({ default: 5 })
    readonly accessibilityRate: number;

    @OneToMany(() => Feedback, feedback => feedback.location, { cascade: true })
    readonly feedbacks: Array<Feedback>;
}