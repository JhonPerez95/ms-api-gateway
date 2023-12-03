import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as cookieParser from 'cookie-parser';
import { AuthModule } from '../../../auth/infrastructure/modules/auth.module';

export function config(app: INestApplication, configService: ConfigService) {
  const cors = configService.get('AppConfiguration.corsOrigins');
  app.enableCors({
    credentials: true,
    origin: cors ? cors.split(',') : '*'
  });

  app.use(cookieParser());
  app.setGlobalPrefix('api');
  app.getHttpAdapter().getInstance().disable('x-powered-by');
  app.getHttpAdapter().getInstance().disable('X-Powered-By');
}

export function configSwagger(app: INestApplication) {
  if (process.env.NODE_ENV !== 'prod') {
    const configS = new DocumentBuilder()
      .setTitle('API-GATEWAY')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, configS, {
      include: [AuthModule],
    });
    SwaggerModule.setup('api/doc', app, document);
  }
}
