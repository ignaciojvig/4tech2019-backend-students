import { Injectable, BadRequestException } from '@nestjs/common';
import { UserViewModel } from 'src/domain/user.viewmodel';
import { UserService } from '../user/user.service';
import { LoginViewModel } from 'src/domain/login.viewmodel';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {
    }

    login(login: LoginViewModel) {
        const user = this.userService.attemptLogin(login);

        if (user) {
            return 'Authenticated';
        } else {
            throw new BadRequestException('User Login or User Password are incorrect!');
        }
    }

}
