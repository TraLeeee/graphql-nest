import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login.response';
import { LoginInput } from './dto/login.input';
import { LocalGuard } from './local.guard';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(LocalGuard)
  login(
    @Args('loginInput') loginInput: LoginInput,
    @Context() context,
  ): Promise<LoginResponse> {
    return this.authService.login(context.user);
  }
}
