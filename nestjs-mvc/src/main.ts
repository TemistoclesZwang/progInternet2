import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';

config() //.env
// console.log(process.env);
// const {USER} = process.env

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT || 2000, '0.0.0.0');
  // await app.listen(2000);


  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Setup Template Engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  // Habilitando Templates Base
  hbs.registerPartials(join(__dirname, '..', '/views/partials'));

  app.useGlobalPipes(
    // .para  validar os campos enviados pela api
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  )
  
  }


bootstrap();
