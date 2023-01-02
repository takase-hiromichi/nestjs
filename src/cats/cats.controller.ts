import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('abc*')
    @HttpCode(418)
    @Header('Cache-Control', 'none')
    hello(): string {
        return 'hello!';
    }

    @Post()
    create(): string {
        return 'this is create method!';    
    }
}
