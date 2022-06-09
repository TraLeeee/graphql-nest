import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { StaffsModule } from '../staffs/staffs.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import jwtConstants from './jwt';

@Module({
  imports: [StaffsModule, PassportModule, JwtModule.register(jwtConstants())],
  providers: [AuthResolver, AuthService, LocalStrategy],
})
export class AuthModule {}
