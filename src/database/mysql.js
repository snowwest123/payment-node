// MySQL 连接配置

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.MYSQL_URI, {
  dialect: 'mysql',
  logging: false,
});

export const connectMySQL = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
    process.exit(1);
  }
};