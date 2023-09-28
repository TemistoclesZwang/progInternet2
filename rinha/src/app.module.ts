import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoasModule } from './pessoa/pessoa.module';

@Module({
  imports: [PessoasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
