import { User } from 'src/entities/user.entity';
import { UserRepository } from '../user-repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}

  findById(id: User['id']): Promise<User | null> {
    return this.userRepo.findOne({
      where: { id },
    });
  }
}
