import { Injectable } from "@nestjs/common";
import { Cat } from "./cats.interface";

@Injectable()
export class CatsDevService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log("dev");
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    console.log("dev");
    return this.cats;
  }
}
