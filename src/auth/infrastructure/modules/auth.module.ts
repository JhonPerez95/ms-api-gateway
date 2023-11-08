import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthProto } from '../../domain/enums/auth.enums';
import { join } from 'path';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    ClientsModule.register([
      {
        name: AuthProto.SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50051',
          package: AuthProto.PACKAGE_NAME,
          protoPath: join(__dirname, '../proto/auth.proto'),
        },
      },
    ]),
  ],
})
export class AuthModule {}
