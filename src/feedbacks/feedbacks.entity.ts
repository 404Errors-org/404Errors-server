import { Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn, JoinTable, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Location } from '../locations/locations.entity';
import { User } from '../users/users.entity';

@Entity()
export class Feedback {
    @ApiProperty()
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @ApiProperty()
    @Column()
    readonly content: string;

    @ApiProperty()
    @Column({ default: 10 })
    readonly rate: number;

    @ManyToOne(() => Location, location => location.feedbacks)
    @JoinTable()
    readonly location: Location;

    @ManyToOne(() => User, (user) => user.feedbacks)
    @JoinTable()
    readonly user: User;
}