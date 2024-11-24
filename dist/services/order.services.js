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
exports.orderServices = void 0;
const order_model_1 = require("../models/order.model");
const product_model_1 = require("../models/product.model");
const insertOrderIntoDB = (newOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const productExist = yield product_model_1.productModel.findById(newOrder.product);
    if (productExist) {
        if (newOrder.quantity > productExist.quantity) {
            throw new Error("This product is out of stock!");
        }
        const totalPrice = newOrder.quantity * productExist.price;
        const Order = new order_model_1.orderModel(Object.assign(Object.assign({}, newOrder), { totalPrice }));
        const result = yield Order.save();
        yield product_model_1.productModel.updateOne({ _id: newOrder.product }, {
            $set: {
                quantity: productExist.quantity > 0
                    ? productExist.quantity - newOrder.quantity
                    : productExist.quantity,
                inStock: productExist.quantity - newOrder.quantity <= 0 ? false : true,
            },
        });
        return result;
    }
    else {
        throw new Error("Product not found!");
    }
});
const getReveneuFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.orderModel.aggregate([
        {
            $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } },
        },
        {
            $project: { _id: 0 },
        },
    ]);
    return result;
});
exports.orderServices = { insertOrderIntoDB, getReveneuFromDB };
