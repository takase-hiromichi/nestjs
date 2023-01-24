import { EntitySchema } from "typeorm";
import { User } from "./entities/user.entity";

export const UserSchema = new EntitySchema<User>({
  name: "User",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  relations: {
    photos: {
      type: "one-to-many",
      target: "Photo",
    },
  },
});
