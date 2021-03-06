import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StaffsService } from './staffs.service';
import { Staff } from '../entities/staff.entity';
import { CreateStaffInput } from './dto/create-staff.input';
import { UpdateStaffInput } from './dto/update-staff.input';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/jwt.guard';

@Resolver(() => Staff)
export class StaffsResolver {
  constructor(private readonly staffsService: StaffsService) {}

  @Mutation(() => Staff, { description: 'Create staff' })
  createStaff(@Args('createStaffInput') createStaffInput: CreateStaffInput) {
    return this.staffsService.create(createStaffInput);
  }

  @Query(() => [Staff], { name: 'staffs' })
  @UseGuards(JwtGuard)
  findAll() {
    return this.staffsService.findAll();
  }

  @Query(() => Staff, { name: 'staff' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.staffsService.findOne(id);
  }

  @Mutation(() => Staff)
  updateStaff(@Args('updateStaffInput') updateStaffInput: UpdateStaffInput) {
    return this.staffsService.update(updateStaffInput.id, updateStaffInput);
  }

  @Mutation(() => Staff)
  removeStaff(@Args('id', { type: () => Int }) id: number) {
    return this.staffsService.remove(id);
  }
}
