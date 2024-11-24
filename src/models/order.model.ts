import mongoose from "mongoose";
import { IOrder } from "../types";

const orderSchema = new mongoose.Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: "Invalid email format!",
      },
    },

    product: {
      type: mongoose.Schema.Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

export const orderModel = mongoose.model("Order", orderSchema);
