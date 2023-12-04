import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { AppModule } from './app/infrastructure/modules/app.module';
import { config, configSwagger } from './app/infrastructure/config/mainConfig';
import { validateConfigValues } from './app/infrastructure/config/validation-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  config(app, configService);
  configSwagger(app);
  validateConfigValues(configService);

  const port = configService.get<number>('AppConfig.port');
  const environment = configService.get<string>('AppConfig.environment');

  Logger.log(
    `(server): Server running on port: ${port} with environment: ${environment}`,
  );
  await app.listen(port);
}
bootstrap();
