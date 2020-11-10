import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qetu1357',
    database: 'img_project',
    logging:true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};
 