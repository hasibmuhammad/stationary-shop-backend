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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("../models/product.model");
const insertProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const Product = new product_model_1.productModel(product);
    const result = yield Product.save();
    return result;
});
const getAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.productModel.find();
    return products;
});
const updateProductDB = (productId, updatedDoc) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.productModel.findByIdAndUpdate({
        _id: new mongoose_1.default.Types.ObjectId(productId),
    }, {
        $set: updatedDoc,
    }, {
        runValidators: true,
        new: true,
    });
    return result;
});
const getProductByIdFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.productModel.findById({
        _id: new mongoose_1.default.Types.ObjectId(productId),
    });
    return product;
});
const deleteProductByIdFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.productModel.findByIdAndDelete({
        _id: new mongoose_1.default.Types.ObjectId(productId),
    });
    return {};
});
exports.productServices = {
    insertProductIntoDB,
    getAllProductsFromDB,
    updateProductDB,
    getProductByIdFromDB,
    deleteProductByIdFromDB,
};
