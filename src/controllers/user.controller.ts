import { Controller, Get, Param } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { GetUserProfileUseCase } from 'src/use-cases/get-user-profile';

@Controller('users')
export class UserController {
  constructor(private readonly getUserProfileUseCase: GetUserProfileUseCase) {}

  @Get('/:id')
  getUserProfile(@Param('id') id: User['id']) {
    return this.getUserProfileUseCase.execute(id);
  }
}
