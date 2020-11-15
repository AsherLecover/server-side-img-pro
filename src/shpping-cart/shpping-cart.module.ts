import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShppingCartRepository } from './shpping-cart-repository';
import { ShppingCartController } from './shpping-cart.controller';
import { ShppingCartService } from './shpping-cart.service';

@Module({
 imports: [TypeOrmModule.forFeature([ShppingCartRepository])],
  controllers: [ShppingCartController],
  providers: [ShppingCartService],
})
export class ShppingCartModule {}
