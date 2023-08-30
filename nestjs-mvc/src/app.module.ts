import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';


@Module({
  imports: [ProdutosModule],
  // .todo novo modulo precisa ser inserido aqui no import do main
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
