import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileInput {
  @Field(() => String, { description: 'Image file path' })
  filePath: string;
}
