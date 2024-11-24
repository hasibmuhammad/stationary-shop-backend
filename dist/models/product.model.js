"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Stationary Product name is required!"],
        unique: true,
    },
    brand: {
        type: String,
        required: [true, "Brand is required!"],
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [0, "Price must be a positive number!"],
    },
    category: {
        type: String,
        required: [true, "Category is required!"],
        enum: [
            "Writting",
            "Office Supplies",
            "Art Supplies",
            "Educational",
            "Technology",
        ],
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        min: [20, "Description must be minimum 20 characters!"],
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required!"],
    },
    inStock: {
        type: Boolean,
        required: [true, "In stock is required!"],
        default: true,
    },
}, {
    timestamps: true,
});
exports.productModel = mongoose_1.default.model("Product", productSchema);
