import { Field, ObjectType } from '@nestjs/graphql';
import { Staff } from '../../entities/staff.entity';

@ObjectType()
export class LoginResponse {
  @Field(() => String, { description: 'Access token' })
  access_token: string;

  @Field(() => Staff, { description: 'Staff info' })
  staff: Staff;
}
