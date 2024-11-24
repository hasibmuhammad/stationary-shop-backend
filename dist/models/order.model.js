"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Email is required!"],
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "Invalid email format!",
        },
    },
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product is required!"],
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1!"],
    },
    totalPrice: {
        type: Number,
    },
}, {
    timestamps: true,
});
exports.orderModel = mongoose_1.default.model("Order", orderSchema);
