import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { CreateCatDto } from "src/dto/cat/cat.dto";
import { CatsService } from "./cats.service";
import { ValidationPipe } from "../pipe/validation/validation.pipe";
import { User } from "src/decorator/user/user.decorator";
import { Cat } from "./cats.entity";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get("abc")
  async findOne(@User() user: any): Promise<void> {
    console.log(user);
  }
}
