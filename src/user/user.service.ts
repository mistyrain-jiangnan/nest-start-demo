import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneById(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(id: number, updatedUser: User){
    return this.userRepository.update(id, updatedUser);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  getUsers() {
    return {
      code: 0,
      data: [],
      msg: '请求用户列表成功！',
    };
  }

  addUser() {
    return {
      code: 0,
      data: {},
      msg: '添加用户成功',
    };
  }
}
