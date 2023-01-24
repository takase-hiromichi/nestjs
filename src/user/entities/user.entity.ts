import { Photo } from "src/photo/entities/photo.entity";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  photos: Photo;
}
