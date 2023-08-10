import { Controller, Get, Res, Query,Render } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as exphbs from 'express-handlebars';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  async getHello(): Promise<{ message: string }> {
    return { message: 'Hello World' };
  }

  @Get('/teste')
  @Render('index')
  async getTeste(@Query('param') param: string): Promise<{ message: string }> {
    return { message: `Teste com parâmetro: ${param}` };
  }
}
