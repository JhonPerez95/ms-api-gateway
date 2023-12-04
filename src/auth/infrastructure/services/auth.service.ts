import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { CreateAuthDto } from '../../domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../domain/dto/update-auth.dto';
import { AuthProto } from '../../domain/enums/auth.enums';
import { AuthServiceClient } from '../proto/auth.pb';

@Injectable()
export class AuthService {
  private svc: AuthServiceClient;

  @Inject(AuthProto.AUTH_SERVICE_NAME)
  private readonly client: ClientGrpc;

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
