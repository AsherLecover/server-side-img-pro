import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class ChatMessagesDto {

    sender_id: string;
    resiver_id: string;
    message_text: string;
    time: string;
}
