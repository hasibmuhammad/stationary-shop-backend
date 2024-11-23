import mongoose from "mongoose";
import { productModel } from "../models/product.model";
import { IProductType } from "../types";

const insertProductIntoDB = async (product: IProductType) => {
  const Product = new productModel(product);
  const result = await Product.save();
  return result;
};

const getAllProductsFromDB = async () => {
  const products = await productModel.find();
  return products;
};

const updateProductDB = async (
  productId: string,
  updatedDoc: Record<string, unknown>
) => {
  const result = await productModel.findByIdAndUpdate(
    {
      _id: new mongoose.Types.ObjectId(productId),
    },
    {
      $set: updatedDoc,
    },
    {
      runValidators: true,
      new: true,
    }
  );
  return result;
};

const getProductByIdFromDB = async (productId: string) => {
  const product = await productModel.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });
  return product;
};

export const productServices = {
  insertProductIntoDB,
  getAllProductsFromDB,
  updateProductDB,
  getProductByIdFromDB,
};
