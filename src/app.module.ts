import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [MoviesController], // controllers는 express의 router같은 것, url을 가져오고 함수를 실행
  providers: [MoviesService],
})
export class AppModule {}
