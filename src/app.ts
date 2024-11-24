import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { orderRoutes } from "./routes/order.routes";
import { productRoutes } from "./routes/product.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/")

export default app;
