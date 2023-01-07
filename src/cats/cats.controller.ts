import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { CustomException } from 'src/exception/custom.exception';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        throw new CustomException();
    }
}
