import { EntityRepository, Repository } from "typeorm";
import { ContactUs } from "./contact-us.entity";

@EntityRepository(ContactUs)
export class ContactUsRepository extends Repository<ContactUs> {


    
    
}