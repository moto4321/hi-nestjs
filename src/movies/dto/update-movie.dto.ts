import { IsNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

// npm i @nestjs/mapped-types DTO를 변환시키는 걸 도와준다.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  
}
