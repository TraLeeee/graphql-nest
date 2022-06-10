import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { StaffsModule } from '../staffs/staffs.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule as SystemConfig } from '../config/config.module';
import { jwtConstants } from '../config/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    StaffsModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [SystemConfig],
      useFactory: async (config: jwtConstants) => ({
        secret: config.secret,
        signOptions: { expiresIn: config.expiresIn },
      }),
      inject: [jwtConstants],
    }),
  ],
  providers: [AuthResolver, AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
