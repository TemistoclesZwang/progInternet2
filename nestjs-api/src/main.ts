import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Invest')
    .setDescription('Descrição dos endpoints da API')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.useGlobalPipes(
    // .para  validar os campos enviados pela api
    new ValidationPipe({
      transform:true,
      whitelist:true,
      forbidNonWhitelisted:true,
    })
  )
  
  await app.listen(3000);
  }
bootstrap();
