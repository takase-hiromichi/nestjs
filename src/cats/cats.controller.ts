import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    create(@Body() body: Cat) {
        this.catsService.create(body);
    }
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }
}
