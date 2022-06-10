import { join } from 'path';
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { File } from 'src/entities/file.entity';
import { Staff } from 'src/entities/staff.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Database {
  get credentials(): TypeOrmModuleOptions {
    return {
      entities: [File, Staff],
      keepConnectionAlive: false,
      dropSchema: false,
      type: 'mysql',
      name: 'default',
      host: process.env.DB_HOST, //this.configService.get('DB_HOST'),
      port: process.env.DB_PORT, //this.configService.get('DB_PORT'),
      username: process.env.DB_USER, //this.configService.get('DB_USER'),
      password: process.env.DB_PWD, //this.configService.get('DB_PWD'),
      database: process.env.DB_NAME, //this.configService.get('DB_NAME'),
      migrationsRun: false,
      synchronize: true,
      logging: true,
    };
  }
}
