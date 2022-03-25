import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // controllers는 express의 router같은 것, url을 가져오고 함수를 실행
  providers: [],
})
export class AppModule {}
