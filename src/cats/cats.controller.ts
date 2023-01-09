import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return id;
    }
}
