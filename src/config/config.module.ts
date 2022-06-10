import { Global, Module } from '@nestjs/common';
import { Database } from './database';
import { jwtConstants } from './jwt';

@Global()
@Module({
  providers: [Database, jwtConstants],
  exports: [Database, jwtConstants],
})
export class ConfigModule {}
