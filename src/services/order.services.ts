import { orderModel } from "../models/order.model";
import { productModel } from "../models/product.model";
import { IOrder, IProductType } from "../types";

const insertOrderIntoDB = async (newOrder: IOrder) => {
  const productExist: IProductType | null = await productModel.findById(
    newOrder.product
  );

  if (productExist) {
    if (newOrder.quantity > productExist.quantity) {
      throw new Error("This product is out of stock!");
    }

    const totalPrice = newOrder.quantity * productExist.price;
    const Order = new orderModel({ ...newOrder, totalPrice });
    const result = await Order.save();

    await productModel.updateOne(
      { _id: newOrder.product },
      {
        $set: {
          quantity:
            productExist.quantity > 0
              ? productExist.quantity - newOrder.quantity
              : productExist.quantity,
          inStock:
            productExist.quantity - newOrder.quantity <= 0 ? false : true,
        },
      }
    );

    return result;
  } else {
    throw new Error("Product not found!");
  }
};

const getReveneuFromDB = async () => {
  const result = await orderModel.aggregate([
    {
      $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } },
    },
    {
      $project: { _id: 0 },
    },
  ]);

  return result;
};

export const orderServices = { insertOrderIntoDB, getReveneuFromDB };
