import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AuthModule } from '../../../auth/infrastructure/modules/auth.module';
import { ProductModule } from '../../../product/infrastructure/modules/product.module';
import { OrderModule } from '../../../order/infrastructure/modules/order.module';

@Module({
  imports: [AuthModule, ProductModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
