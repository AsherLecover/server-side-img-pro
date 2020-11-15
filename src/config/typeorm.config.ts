import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ShppingCart } from "src/shpping-cart/shpping-cart-entity";
import { ShppingCartRepository } from "src/shpping-cart/shpping-cart-repository";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qetu1357',
    database: 'img_project',
    // logging:true,
    entities: [__dirname + '/../**/*.entity.{js,ts}',ShppingCart],
    synchronize: true,
};
 