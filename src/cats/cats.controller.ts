import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { CreateCatDto } from "src/dto/cat/cat.dto";
import { Cat } from "./cats.interface";
import { CatsService } from "./cats.service";
import { ValidationPipe } from "../pipe/validation/validation.pipe";
import { LoggingInterceptor } from "src/interceptor/logging/logging.interceptor";

@Controller("cats")
@UseInterceptors(LoggingInterceptor)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }
}
