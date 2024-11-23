import { Request, Response } from "express";
import { productServices } from "../services/product.services";

const createProduct = async (req: Request, res: Response) => {
  try {
    const newProduct = req.body;
    const result = await productServices.insertProductIntoDB(newProduct);

    res.status(201).json({
      message: "Product Created Successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Error in creating product!",
        success: false,
        error,
        stack: error.stack,
      });
    }
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDB();
    res.status(200).json({
      message: "Products retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Error in retrieving products!",
        success: false,
        error,
        stack: error.stack,
      });
    }
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductByIdFromDB(productId);
    res.status(200).json({
      message: "Product retrieved successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Error retrieving product!",
        success: false,
        error,
        stack: error.stack,
      });
    }
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedDoc = req.body;
    const result = await productServices.updateProductDB(productId, updatedDoc);
    res.status(200).json({
      message: "Products updated successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Error in updating product!",
        success: false,
        error,
        stack: error.stack,
      });
    }
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
