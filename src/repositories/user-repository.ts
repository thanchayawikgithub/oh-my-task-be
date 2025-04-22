import { User } from 'src/entities/user.entity';

export abstract class UserRepository {
  abstract findById(id: User['id']): Promise<User | null>;
}
