// 用户服务微服务 用户服务入口文件
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import connectMongoDB from "../database/mongodb.js"; 

const app = express();
const port = process.env.PORT;;
dotenv.config();
app.use(cors()); // 设置跨域

app.use(express.json());

app.use(`/api`, router);

// connect MongoDB
connectMongoDB();

// 启动用户服务
app.listen(port, () => {
  console.log(`User service is running on port ${port}`);
});
