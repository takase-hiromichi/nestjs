import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/cat/cat.dto';
import { Cat } from './cats.interface';
import { CatsService } from './cats.service';
import { ValidationPipe } from '../pipe/validation/validation.pipe';
import { Roles } from 'src/decorator/roles/roles.decorator';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    
    @Post()
    @Roles('admin')
    create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }
}
