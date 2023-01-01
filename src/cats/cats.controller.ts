import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    hello(@Req() request: Request): Request {
        return request;
    }

    @Get('goodbye')
    goodbye(): String {
        return "goodbye!";
    }
}
