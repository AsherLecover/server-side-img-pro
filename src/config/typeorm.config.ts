import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/auth/user.entity";
import { ChatMessages } from "src/chat-messages/chat-messages-entity";
import { ContactUs } from "src/contact-us/contact-us.entity";
import { ImgListBySubject } from "src/pic-main-list-subjects/img-list.entity";
import { ShppingCart } from "src/shpping-cart/shpping-cart-entity";
import { ShppingCartRepository } from "src/shpping-cart/shpping-cart-repository";
import { cardImgList } from "src/subjects-images-data/img.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qetu1357',
    database: 'img_project',
    // logging:true,
    // entities: [__dirname + '/../**/*.entity.{js,ts}',ShppingCart,ContactUsEntity ],
    entities: [ShppingCart,ContactUs, User, ImgListBySubject, cardImgList, ChatMessages],
    synchronize: true
};
 