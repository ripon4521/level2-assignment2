/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import orderSchema from './order.validation';
import { OrderServices } from './order.services';


const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;
    const { error, value } = orderSchema.validate(orderData);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something Went Wrong',
        error: error.details,
      });
    }

    const result = await OrderServices.createOrderDB(value);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
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

// const getAllProducts = async (req: Request, res: Response) => {

//   try {
//     let result;
//     const seacrh = req.query;
// if (seacrh.searchTerm) {
//   const value = seacrh.searchTerm;
//   result = await ProductServices.getSearchProductsFromDb(value);
   
// } else {
//    result = await ProductServices.getAllProductsFromDb();
// }
   
 
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
    createOrder
//   getAllProducts,

  // getSearchProducts,
};
