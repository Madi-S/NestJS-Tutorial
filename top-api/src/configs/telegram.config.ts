import { ITelegramOptions } from './../telegram/telegram.interface';
import { ConfigService } from '@nestjs/config';

export const getTelegramConfig = (): ITelegramOptions => {
  return {
    token: '',
    chatId: '',
  };
};
