import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';
import * as exphbs from 'express-handlebars';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }




@Controller()
export class AppController {
  @Get('/')
  async getHello(@Res() res: Response): Promise<void> {
    const viewEngine = exphbs.create({ extname: '.hbs' });

    const viewPath = path.join(__dirname, '..', 'views'); // Assuming views folder is at the root level
    
    res.render(path.join(viewPath, 'index'), { 
      layout: false, // Disable layout
      message: 'Hello World' 
    });
  }
}

