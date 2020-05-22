import { IConfig } from './interface';
import { DEV_SERVER_PORT } from '@/constants';

export const devConfig : IConfig = {
    port: DEV_SERVER_PORT,
    mysql: {
        host: "localhost",
        port: 3306,
        username: "root",
        password: "654321",
        database: "crophe"
    }
}