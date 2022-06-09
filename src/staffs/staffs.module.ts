import { Module } from '@nestjs/common';
import { StaffsService } from './staffs.service';
import { StaffsResolver } from './staffs.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from '../entities/staff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Staff])],
  providers: [StaffsResolver, StaffsService],
  exports: [StaffsService],
})
export class StaffsModule {}
