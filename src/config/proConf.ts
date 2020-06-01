import { IConfig } from './interface';
import { PRO_SERVER_PORT } from '@/constants';

export const proConfig : IConfig = {
    port: PRO_SERVER_PORT,
    mysql: {
        host: "localhost",
        port: 3306,
        username: "root",
        password: "654321",
        database: "dnucleomeorg"
    }
}