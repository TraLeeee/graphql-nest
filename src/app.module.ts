import { Injectable, Module } from '@nestjs/common';
import { StaffsModule } from './staffs/staffs.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigModule as SystemConfig } from './config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from './config/database';
import { AuthModule } from './auth/auth.module';

@Injectable()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [SystemConfig],
      useFactory: (config: Database) => config.credentials,
      inject: [Database],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
      uploads: false,
    }),
    SystemConfig,
    FilesModule,
    StaffsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
