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
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './domain/schemas/user.schema';
import { UserActivityController } from './controllers/user-activity/user-activity.controller';
import { UserActivitySchema } from './domain/schemas/user-activity.schema';
import { UserActivityService } from './services/user-activity/user-activity.service';
import { UserActivityRepository } from './repositories/user-activity-repository/user-activity.repository';
import { WebSocketGateway } from '@nestjs/websockets';
import { WebsocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/admin',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'UserActivity', schema: UserActivitySchema },
    ]),
    JwtModule.register(
      {
        secret: secretKey, signOptions: {
          expiresIn: '600m',
        },
      }),
  ],
  controllers: [AppController, UserController, AuthController, UserActivityController],
  providers: [AppService, UserService, UserRepository, AuthService, JwtStrategy, UserActivityService, UserActivityRepository, WebsocketGateway],
})
export class AppModule { }
