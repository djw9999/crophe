import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export interface IConfig {
    port: number | string,
    mysql: Partial<MysqlConnectionOptions>
}