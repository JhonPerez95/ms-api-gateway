import { Inject, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { AUTH_PACKAGE_NAME, AUTH_SERVICE_NAME } from '../proto/auth.pb';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICE_NAME,
        options: {
          package: AUTH_PACKAGE_NAME,
          protoPath: join(__dirname, '../proto/auth.proto'),
          url: process.env.PATH_MS_AUTH,
        },
        transport: Transport.GRPC,
      },
    ]),
  ],
})
export class AuthModule {}
