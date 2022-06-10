import { Injectable } from '@nestjs/common';

@Injectable()
export class jwtConstants {
  get secret(): string {
    return process.env.JWT_SECRET;
  }

  get expiresIn(): string {
    return process.env.JWT_EXPIRESIN;
  }
}
