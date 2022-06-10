import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StaffSignupInput {
  @Field(() => String, { description: 'staff first name' })
  firstName: string;

  @Field(() => String, { description: 'staff last name' })
  lastName: string;

  @Field(() => String, { description: 'staff email' })
  email: string;

  @Field(() => String, { description: 'staff password' })
  password: string;

  @Field(() => String, { description: 'staff role_ids' })
  roleIds: string;
}
