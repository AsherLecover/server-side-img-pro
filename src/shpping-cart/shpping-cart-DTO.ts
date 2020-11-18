import { PrintSize } from "./print-size.enum";
import { PrintType } from "./print-type.enum";

export class ShppingCartDto {
  
  id: number;
  UserIdByEmail: number;
  img_id: number;
  numOfItems: number;
  printType: PrintType
  printSize:PrintSize
}

