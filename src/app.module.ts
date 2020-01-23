import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './services/user/user.service';
import { UserRepository } from './repositories/user-repository/user-repository';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { secretKey, JwtStrategy } from './services/auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register(
      {
        secret: secretKey, signOptions: {
          expiresIn: '600m',
        },
      }),
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService, UserRepository, AuthService, JwtStrategy],
})
export class AppModule { }
