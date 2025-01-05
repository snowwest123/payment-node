// 支付网关服务微服务 支付服务入口文件
// 交易服务入口文件
// 用户服务微服务 用户服务入口文件
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/paymentRoutes.js";

const app = express();
const port = process.env.PORT;;

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(`/api`, router);

// 启动用户服务
app.listen(port, () => {
  console.log(`Payment service is running on port ${port}`);
});
