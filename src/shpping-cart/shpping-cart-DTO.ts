import { PrintSize } from "./print-size.enum";
import { PrintType } from "./print-type.enum";

export class ShppingCartDto {
  
  id: number;
  userEmail: string;
  imgId: number;
  numOfItems: number;
  printType: PrintType
  printsize:PrintSize
}

