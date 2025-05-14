import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const { DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: DB_HOST,
      port: Number(DB_PORT),
      user: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_NAME,
    },
    migrations: {
      directory: './migrations',
      extension: 'ts',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './dist/migrations',
      extension: 'js',
    },
    seeds: {
      directory: './dist/seeds',
    },
  },
};

export default config;
