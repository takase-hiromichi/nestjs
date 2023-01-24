import { User } from "src/user/entities/user.entity";

export class Photo {
  id: number;
  url: string;
  user: User;
}
