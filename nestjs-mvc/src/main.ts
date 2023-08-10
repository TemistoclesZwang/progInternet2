// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as exphbs from 'express-handlebars';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const expressApp = app.getHttpAdapter().getInstance() as express.Application;

  const hbs = exphbs.create({ extname: '.hbs' });

  expressApp.engine('hbs', hbs.engine);
  expressApp.set('view engine', 'hbs');

  const viewsPath = path.join(__dirname, 'views');
  expressApp.set('views', viewsPath);

  await app.listen(3000);
}
bootstrap();
