import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
//
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import * as Joi from 'joi';

// Modules
import { AuthModule } from '../../../auth/infrastructure/modules/auth.module';

// Config
import configEnv from '../config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [configEnv],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .required()
          .valid('dev', 'pdn', 'local')
          .default('local'),
        PORT: Joi.number().required().default(3000),
        CORS_ORIGINS: Joi.string().required(),
        PATH_MS_AUTH: Joi.string().required(),
      }),
    }),
    MorganModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MorganInterceptor('dev'),
    },
  ],
})
export class AppModule {}
