import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule], //pode importar um module dentro de um module
})
export class AppModule {}

// Injeção de dependência || automatizar a inserção das dependencias || consegue entender que o controller precisa de uma dependencia do tipo AppService automaticamente || desde que exista uma classe chamada AppService
// a classe precisa ter OBRIGATORIAMENTE o decorator "@Injectable()" para conseguir fazer a injeção dessa classe dentro de outra