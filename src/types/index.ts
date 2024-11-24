import mongoose from "mongoose";

export interface IProductType {
  name: string;
  brand: string;
  price: number;
  category:
    | "Writting"
    | "Office Suppliers"
    | "Art Suppliers"
    | "Educational"
    | "Technology";
  description: string;
  quantity: number;
  inStock: boolean;
}

export interface IOrder {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
