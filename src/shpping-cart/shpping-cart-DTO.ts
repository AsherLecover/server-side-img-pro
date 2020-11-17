import { PrintSize } from "./print-size.enum";
import { PrintType } from "./print-type.enum";

export class ShppingCartDto {
  
  id: number;
  UserIdByEmail: number;
  imgId: number;
  numOfItems: number;
  printType: PrintType
  printSize:PrintSize
}

