import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async health(): Promise<any> {
    return {
      status: 'OK',
      name: 'Microservice Apigateway',
      version: '1.0',
    };
  }
}
