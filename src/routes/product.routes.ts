import express from "express";
import { productController } from "../controllers/product.controllers";

const router = express.Router();

// Create a stationary product
router.post("/", productController.createProduct);

// Get all stationary products
router.get("/", productController.getAllProducts);

// get a product by id
router.get("/:productId", productController.getProductById);

// update a product
router.put("/:productId", productController.updateProduct);

export const productRoutes = router;
