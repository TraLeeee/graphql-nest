import { InputType, Field } from '@nestjs/graphql';
import { File } from '../../entities/file.entity';

@InputType()
export class CreateStaffInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => String)
  roleIds: string;

  @Field(() => File, { nullable: true })
  avatar?: File;
}
