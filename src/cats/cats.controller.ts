import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { CustomException } from 'src/exception/custom.exception';
import { HttpFilter } from '../filter/http/http.filter';

@Controller('cats')
export class CatsController {
    @Get()
    @UseFilters(new HttpFilter())
    findAll() {
        throw new CustomException();
    }
}
