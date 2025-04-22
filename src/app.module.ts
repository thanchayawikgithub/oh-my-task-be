import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DataBaseModule } from './infra/database';
import { ControllerModule } from './controllers/controller.module';
import { RepositoryModule } from './repositories/repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DataBaseModule,
    RepositoryModule,
    ControllerModule,
  ],
})
export class AppModule {}
