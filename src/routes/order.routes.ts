import express from "express";
import { orderController } from "../controllers/order.controllers";
const router = express.Router();

router.post("/", orderController.createOrder);
router.get("/revenue", orderController.calculateTotalRevenue);

export const orderRoutes = router;
