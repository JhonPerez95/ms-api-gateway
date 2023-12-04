import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganModule, MorganInterceptor } from 'nest-morgan';
//
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

// Modules
import { AuthModule } from '../../../auth/infrastructure/modules/auth.module';

// Config
import config from '../config/config';
import { environments } from '../config/enviroment';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        environments[process.env.NODE_ENV] || Object.values(environments),
      load: [config],
      isGlobal: true,
    }),
    AuthModule,
    MorganModule,
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
