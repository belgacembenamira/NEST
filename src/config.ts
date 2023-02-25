/* eslint-disable prettier/prettier */
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export const MyqslConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3000,
  username: 'root',
  password: '',
  database: 'nest-tp',
};