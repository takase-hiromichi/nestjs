import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/cat/cat.dto';
import { JoiValidationPipe } from '../pipe/joi-validation/joi-validation.pipe';
import { createCatSchema } from '../schema/cat/cat.schema';
import { Cat } from './cats.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    
    @Post()
    @UsePipes(new JoiValidationPipe(createCatSchema))
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }
    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }
}
