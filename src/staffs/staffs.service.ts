import { Injectable } from '@nestjs/common';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
import { StaffsRepository } from './staffs.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from '../entities/staff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StaffsService {
  constructor(
    @InjectRepository(Staff)
    private staffsRepository: Repository<Staff>,
  ) {}

  create(createStaffInput: CreateStaffInput) {
    return this.staffsRepository.save(createStaffInput);
  }

  findAll() {
    return `This action returns all staffs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  findByEmail(email: string) {
    return this.staffsRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  update(id: number, updateStaffInput: UpdateStaffInput) {
    return `This action updates a #${id} staff`;
  }

  remove(id: number) {
    return `This action removes a #${id} staff`;
  }
}
