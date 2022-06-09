import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@Entity({ name: 'files' })
@InputType('FileInput')
@ObjectType()
export class File {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @Column({
    name: 'file_path',
    length: 255,
  })
  @Field(() => String, { description: 'Image file path' })
  filePath: string;

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
}
