import { Controller, Post, Body } from '@nestjs/common';
import { LoginViewModel } from 'src/domain/login.viewmodel';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() login: LoginViewModel) {
    return this.authService.login(login);
  }
}
