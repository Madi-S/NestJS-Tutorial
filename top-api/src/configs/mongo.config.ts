import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoUri(configService),
    ...getMongoOptions(),
  };
};

'mongodb://localhost:27017'
const getMongoUri = (configService: ConfigService): string =>
  'mongodb://' +
//   configService.get('MONGO_LOGIN') +
//   ':' +
//   configService.get('MONGO_PASSWORD') +
//   '@' +
  configService.get('MONGO_HOST') +
  ':' +
  configService.get('MONGO_PORT') +
  '/' +
  configService.get('MONGO_AUTH_DATABASE');

// tslint:disable-next-line: no-any
const getMongoOptions = (): { [key: string]: any } => {
  return {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
};
