import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'taeho', username: 'bbaktaeho', password: '1234' },
    { id: 2, name: 'zzz', username: 'fgdg', password: '1234' },
    { id: 3, name: 'gg', username: 'bjhfghj', password: '1234' },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
