import { Injectable, Module } from '@nestjs/common';
import { StaffsModule } from './staffs/staffs.module';
import { ConfigModule } from '@nestjs/config';
import { ConfigModule as SystemConfig } from './config/config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Database } from './config/database';
import { AuthModule } from './auth/auth.module';

@Injectable()
@Module({
  imports: [
    SystemConfig,
    FilesModule,
    StaffsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [SystemConfig],
      useFactory: (config: Database) => config.credentials(),
      inject: [Database],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
