import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StaffSigninInput {
  @Field(() => String, { description: 'Staff email' })
  email: string;

  @Field(() => String, { description: 'Staff password' })
  password: string;
}
