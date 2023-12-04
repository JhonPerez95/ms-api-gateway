import { Controller, Get, Post, Put, Body } from '@nestjs/common';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { CreateAuthDto } from '../../domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../domain/dto/update-auth.dto';
import {
  RegisterResponse,
  RegisterRequest,
  LoginRequest,
  LoginResponse,
} from '../proto/auth.pb';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body() body: RegisterRequest,
  ): Promise<Observable<RegisterResponse>> {
    return this.authService.register(body);
  }

  @Put('login')
  login(@Body() body: LoginRequest): Promise<Observable<LoginResponse>> {
    return this.authService.login(body);
  }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }
}
