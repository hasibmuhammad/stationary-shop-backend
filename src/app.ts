import cors from "cors";
import dotenv from "dotenv";
import express from "express";
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

export default app;
