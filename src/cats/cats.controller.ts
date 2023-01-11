import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/cat/cat.dto';
import { Cat } from './cats.interface';
import { CatsService } from './cats.service';
import { ValidationPipe } from '../pipe/validation/validation.pipe';

@Controller('cats')
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
