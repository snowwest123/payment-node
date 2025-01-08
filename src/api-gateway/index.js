//  API 网关微服务  网关入口文件
// apiGateway.js
// require('dotenv').config();
// const express = require('express');
import cors from "cors";
import express from "express";
import router from "./routes/index.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

dotenv.config();

const app = express();
const port = process.env.PORT;


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 // each IP can only send 100 requests per windowMs
});

app.use(helmet()); // use security HTTP headers
app.use(limiter); // use rate limit

app.use(cors()); // 设置跨域

app.use(express.json());

app.use(`/api`, router);

// 启动API网关
app.listen(port, () => {
  console.log(`API Gateway is running on port ${port}`, process.env.NODE_ENV, 'env');
});
