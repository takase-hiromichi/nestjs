import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cat } from "./cats.entity";

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private userRepository: Repository<Cat>) {}

  create(cat: Cat) {
    console.log("prod");
    this.userRepository.save(cat);
  }
  async findAll(): Promise<Cat[]> {
    console.log("prod");
    return await this.userRepository.find();
  }
}
