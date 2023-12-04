import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { CreateAuthDto } from '../../domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../domain/dto/update-auth.dto';
import {
  AuthServiceClient,
  AUTH_SERVICE_NAME,
  ValidateResponse,
  RegisterRequest,
  LoginRequest,
} from '../proto/auth.pb';

@Injectable()
export class AuthService {
  private svc: AuthServiceClient;

  @Inject(AUTH_SERVICE_NAME)
  private readonly client: ClientGrpc;

  public onModuleInit(): void {
    this.svc = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  public async validate(token: string): Promise<ValidateResponse> {
    return firstValueFrom(this.svc.validate({ token }));
  }

  async login(loginRequest: LoginRequest) {
    return this.svc.login(loginRequest);
  }

  async register(registerRequest: RegisterRequest) {
    return this.svc.register(registerRequest);
  }

  async create(createAuthDto: CreateAuthDto) {
    return {
      message: 'This action adds a new auth',
      data: createAuthDto,
    };
  }
}
