import { PrintSize } from "./print-size.enum";
import { PrintType } from "./print-type.enum";

export class ShppingCartDto {
  
  id: number;
  email: string;
  imgId: number;
  numOfItems: number;
  printType: PrintType
  printSize:PrintSize
}

