import { join } from 'path';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { File } from 'src/entities/file.entity';
import { Staff } from 'src/entities/staff.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Database {
  constructor(private configService: ConfigService) {}
  credentials(): TypeOrmModuleOptions {
    return {
      entities: [File, Staff],
      keepConnectionAlive: false,
      dropSchema: true,
      type: 'mysql',
      name: 'default',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PWD'),
      database: this.configService.get('DB_NAME'),
      migrationsRun: false,
      synchronize: true,
      logging: true,
    };
  }
}
