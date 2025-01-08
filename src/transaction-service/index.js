// 交易服务入口文件
import express from "express";
import dotenv from "dotenv";
import {connectMySQL} from "../database/mysql.js";
import router from './routes/transactionRoutes.js';

dotenv.config();


const app = express();
const port = process.env.PORT;

app.use(express.json());


const startServer = async () => {
    try {
      // connnect MySQL then start the server
      await connectMySQL();
      app.use(`/api`, router);
  
      // start the server
      app.listen(port, () => {
        console.log(`Transaction service is running on port ${port}`);
      });
    } catch (error) {
      console.error('Error starting server:', error);
      process.exit(1);
    }
  };
  
  startServer();