import { EntityRepository, Repository } from "typeorm";
import { ChatMessages } from "./chat-messages-entity";



@EntityRepository(ChatMessages)
export class ChatMessagesRepository extends Repository<ChatMessages> {


  
}