import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { GetUserProfileUseCase } from 'src/use-cases/get-user-profile';
import { RepositoryModule } from 'src/repositories/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [UserController],
  providers: [GetUserProfileUseCase],
})
export class ControllerModule {}
