import { Cat } from "./cats.interface";

export const mockCatsService = {
  create(cat: Cat) {
    console.log("created.");
  },
  findAll(): Cat[] {
    return [
      {
        name: "test",
        age: 12,
        breed: "bang",
      },
    ];
  },
};
