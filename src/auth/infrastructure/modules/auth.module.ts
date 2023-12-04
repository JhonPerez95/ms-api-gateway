import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { AuthProto } from '../../domain/enums/auth.enums';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ClientsModule.register([
      {
        name: AuthProto.AUTH_PACKAGE_NAME,
        options: {
          package: AuthProto.AUTH_PACKAGE_NAME,
          protoPath: join(__dirname, '../proto/auth.proto'),
          url: '0.0.0.0:50051',
        },
        transport: Transport.GRPC,
      },
    ]),
  ],
})
export class AuthModule {}
