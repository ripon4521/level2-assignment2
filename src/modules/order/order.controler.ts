/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import orderSchema from './order.validation';
import { OrderServices } from './order.services';
import { ProductModel } from '../product.model';
import { ObjectId } from 'mongodb';

const createOrder = async (req: Request, res: Response) => {
  const order = req.body;
  const { error, value } = orderSchema.validate(order);
  const {  productId, quantity } = value;
  // console.log(productId, quantity)
  if (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: error.details,
    });
  }
  //   console.log(productId)
  // const objectId = new ObjectId(productId);
  // console.log(objectId)
  try {

   
    const product = await ProductModel.findOne({ _id :productId });
    console.log(product)

    if (!product) {
      return res
        .status(200)
        .json({ success: false, message: 'Order not found' });
    }
    if (product.inventory.quantity < quantity) {
      return res
        .status(200)
        .json({
          success: false,
          message: 'Insufficient quantity available in inventory',
        });
    }

    const result = await OrderServices.createOrderDB(value);
    product.inventory.quantity -= quantity;
    product.inventory.inStock = product.inventory.inStock === false;

    await product.save();
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Something Went Wrong',
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    let result;
    const seacrh = req.query;
    if (seacrh.email) {
      const value = seacrh.email;
      result = await OrderServices.getSearchOrderFromDB(value);
    } else {
      result = await OrderServices.getAllOrderFromDb();
    }

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: err.details,
    });
  }
};

// const getSearchProducts = async (req: Request, res: Response) => {
//   try {
//     const {  search } = req.query;
//     const result = await ProductServices.getSearchProductsFromDb(search);
//     res.status(200).json({
//       success: true,
//       message: 'Products fetched successfully!',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: 'Something Went Wrong',
//       error: err.details,
//     });
//   }
// };

// const getSingleProducts = async (req: Request, res: Response) => {
//   try {
//     const { productId } = req.params;
//     const result = await ProductServices.getSingleProductsFromDb(productId);
//     res.status(200).json({
//       success: true,
//       message: 'Product fetched successfully!',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: 'Something Went Wrong',
//       error: err.details,
//     });
//   }

export const OrderController = {
  createOrder,
  getAllOrders,

  //   getAllProducts,

  // getSearchProducts,
};
