import { Controller, Get, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get(':id')
    hello(@Param('id') id: string): string {
        return `ID is ${id}`;
    }
}
