import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LocalGuard } from './local.guard';
import { UseGuards } from '@nestjs/common';
import { StaffSigninResponse } from './dto/staff-signin.response';
import { StaffSigninInput } from './dto/staff-signin.input';
import { Staff } from '../entities/staff.entity';
import { StaffSignupInput } from './dto/staff-signup.input';
import { StaffSignupResponse } from './dto/staff-signup.response';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GraphQLUpload = require('graphql-upload/GraphQLUpload.js');
import { FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
import path = require('path');
import { File } from '../entities/file.entity';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => StaffSigninResponse)
  @UseGuards(LocalGuard)
  login(
    @Args('staffSigninInput') staffSigninInput: StaffSigninInput,
    @Context() context,
  ): Promise<StaffSigninResponse> {
    return this.authService.signin(context.user);
  }

  @Mutation(() => Staff)
  signup(
    @Args('staffSignupInput') staffSignupInput: StaffSignupInput,
  ): Promise<StaffSignupResponse> {
    return this.authService.signup(staffSignupInput);
  }

  @Mutation(() => File, { description: 'Test upload file bro' })
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<object> {
    const filePath = path.join(__dirname, '../../src/uploads', filename);
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(filePath))
        .on('finish', () => resolve({ status: 'Success', file_path: filePath }))
        .on('error', () => reject({ status: 'Failed' })),
    );
  }
}
