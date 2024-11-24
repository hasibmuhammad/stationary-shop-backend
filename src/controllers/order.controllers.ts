import { Request, Response } from "express";
import { orderServices } from "../services/order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = req.body;
    const result = await orderServices.insertOrderIntoDB(newOrder);

    res.status(201).json({
      message: "Order Created Successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Error in creating order!",
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
  }
};

const calculateTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getReveneuFromDB();

    res.status(201).json({
      message: "Revenue calculated successfully!",
      success: true,
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: "Error in calculating revenue!",
        success: false,
        error: error.message,
        stack: error.stack,
      });
    }
  }
};

export const orderController = { createOrder, calculateTotalRevenue };
