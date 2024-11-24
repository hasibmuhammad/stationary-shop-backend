"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controllers_1 = require("../controllers/product.controllers");
const router = express_1.default.Router();
// Create a stationary product
router.post("/", product_controllers_1.productController.createProduct);
// Get all stationary products
router.get("/", product_controllers_1.productController.getAllProducts);
// get a product by id
router.get("/:productId", product_controllers_1.productController.getProductById);
// update a product
router.put("/:productId", product_controllers_1.productController.updateProduct);
// update a product
router.delete("/:productId", product_controllers_1.productController.deleteProduct);
exports.productRoutes = router;
