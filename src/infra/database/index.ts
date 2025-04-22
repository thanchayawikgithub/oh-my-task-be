import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/common/constants/config';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get(config.POSTGRES_HOST),
        username: configService.get(config.POSTGRES_USER),
        password: configService.get(config.POSTGRES_PASSWORD),
        database: configService.get(config.POSTGRES_DB),
        entities: ['dist/entities/*.entity.{ts,js}'],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class DataBaseModule {}
