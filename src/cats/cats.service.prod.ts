import { Injectable } from "@nestjs/common";
import { Cat } from "./cats.interface";

@Injectable()
export class CatsProdService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log("prod");
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    console.log("prod");
    return this.cats;
  }
}
