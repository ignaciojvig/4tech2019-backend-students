import { IsNotEmpty, Length } from 'class-validator';

export class LikeOrDislikeViewModel {

    @IsNotEmpty()
    @Length(24)
    readonly userId: string;

    @IsNotEmpty()
    @Length(24)
    readonly userActivityId: string;
}
