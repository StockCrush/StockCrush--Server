import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // 1. database 연결
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'my-database',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'stockcrush',
      entities: [],
      synchronize: true,
      logging: true,
      // ORM이 실제 쿼리로 어떻게 돌아가는지 로그를 남겨줌
    }),
    // 2. elastic search 연결
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
