import { IsInt, IsString } from "class-validator";

export class CreateCatDto {
  id: number;
  @IsString()
  name: string;
  @IsInt()
  age: number;
  @IsString()
  breed: string;
}
