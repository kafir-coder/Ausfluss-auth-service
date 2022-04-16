import { ConnectionOptions } from 'typeorm';

export default {
  type: 'mysql',
  host: process.env.MSYQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'caio1234',
  database: process.env.MYSQL_DATABASE || 'auth_store',
  entities: ['src/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'custom_migration_table',
  synchronize: false,
} as ConnectionOptions;
