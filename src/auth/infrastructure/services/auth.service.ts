import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../../domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../domain/dto/update-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return {
      message: 'This action adds a new auth',
      data: createAuthDto,
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
