import mongoose from "mongoose";
import { IProductType } from "../types";

const productSchema = new mongoose.Schema<IProductType>(
  {
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
  },
  {
    timestamps: true,
  }
);

export const productModel = mongoose.model("Product", productSchema);
