export const DEV_SERVER_PORT = 3001;
export const PRO_SERVER_PORT = 3001;

export const isProduction = process.env.NODE_ENV === 'production';

export enum LANGUAGE {
    zh = 'zh-CN',
    en = 'en-US'
}