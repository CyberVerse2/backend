import * as dotenv from 'dotenv';
dotenv.config();
interface AppConfig {
  NAME?: string;
  PORT: string | number;
  ENV?: string;
}
interface EnvConfig {
  APP: AppConfig;
}
export const ENVIRONMENT: EnvConfig = {
  APP: {
    NAME: process.env.APP_NAME,
    PORT: process.env.PORT || 3000,
    ENV: process.env.APP_ENV
  }
};
