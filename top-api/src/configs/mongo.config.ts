import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  return 'mongodb://localhost:27017';

  // if (configService.get('MONGO_RUN_ON_LOCAL')) {
  //   return 'mongodb://localhost:27017';
  // }
  // return (
  //   'mongodb://' +
  //   configService.get('MONGO_LOGIN') +
  //   ':' +
  //   configService.get('MONGO_PASSWORD') +
  //   '@' +
  //   configService.get('MONGO_HOST') +
  //   ':' +
  //   configService.get('MONGO_PORT') +
  //   '/' +
  //   configService.get('MONGO_AUTH_DATABASE')
  // );
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
