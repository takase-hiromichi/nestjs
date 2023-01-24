import { EntitySchema } from "typeorm";
import { Photo } from "./entities/photo.entity";

export const PhotoSchema = new EntitySchema<Photo>({
  name: "Photo",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    url: {
      type: String,
    },
  },
  relations: {
    user: {
      type: "many-to-one",
      target: "User",
    },
  },
});
