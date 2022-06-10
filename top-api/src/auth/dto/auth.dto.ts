import { IsString } from 'class-validator';

export class AuthDto {
  @IsString()
  login: string; // aka email

  @IsString()
  password: string;
}
