import { IsNotEmpty, MaxLength, Max, Length } from 'class-validator';

export class UserViewModel {

    @IsNotEmpty()
    @Length(3, 10)
    readonly userLogin: string;

    @IsNotEmpty()
    @Length(3, 10)
    readonly userName: string;

    @IsNotEmpty()
    @Length(3, 10)
    readonly password: string;

}
