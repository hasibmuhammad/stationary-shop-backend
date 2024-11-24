"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_services_1 = require("../services/product.services");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = req.body;
        const result = yield product_services_1.productServices.insertProductIntoDB(newProduct);
        res.status(201).json({
            message: "Product Created Successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Error in creating product!",
                success: false,
                error,
                stack: error.stack,
            });
        }
    }
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_services_1.productServices.getAllProductsFromDB();
        res.status(200).json({
            message: "Products retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Error in retrieving products!",
                success: false,
                error,
                stack: error.stack,
            });
        }
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.productServices.getProductByIdFromDB(productId);
        res.status(200).json({
            message: "Product retrieved successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Error retrieving product!",
                success: false,
                error,
                stack: error.stack,
            });
        }
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedDoc = req.body;
        const result = yield product_services_1.productServices.updateProductDB(productId, updatedDoc);
        res.status(200).json({
            message: "Products updated successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Error in updating product!",
                success: false,
                error,
                stack: error.stack,
            });
        }
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.productServices.deleteProductByIdFromDB(productId);
        res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({
                message: "Error in deleting product!",
                success: false,
                error,
                stack: error.stack,
            });
        }
    }
});
exports.productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};
