import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { File } from '../entities/file.entity';

@Entity({ name: 'staffs' })
@InputType('StaffInput')
@ObjectType()
export class Staff {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({
    name: 'first_name',
    length: 255,
  })
  @Field(() => String)
  firstName: string;

  @Column({
    name: 'last_name',
    length: 255,
  })
  @Field(() => String)
  lastName: string;

  @Column({
    length: 255,
  })
  @Field(() => String)
  email: string;

  @Column({
    length: 255,
  })
  @Field(() => String, { nullable: false })
  password: string;

  @Column({
    name: 'role_ids',
    length: 255,
  })
  @Field(() => String)
  roleIds: string;

  @Column({
    nullable: true,
    length: 255,
  })
  @OneToOne(() => File, (file) => file.id, {
    nullable: true,
  })
  @JoinColumn({
    name: 'avatar',
  })
  @Field(() => File, { nullable: true })
  avatar?: File;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    name: 'deleted_at',
  })
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
