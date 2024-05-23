import { Request, Response } from 'express';
import { ProductServices } from './product.services';
import productJoiSchema from './product.validation';
import { ProductModel } from '../product.model';


const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const { error, value } = productJoiSchema.validate(productData);
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something Went Wrong',
        error: error.details,
      });
    }

    const result = await ProductServices.createProductDB(value);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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

const getAllProducts = async (req: Request, res: Response) => {

  try {
    let result;
    const seacrh = req.query;
if (seacrh.searchTerm) {
  const value = seacrh.searchTerm;
  result = await ProductServices.getSearchProductsFromDb(value);
   
} else {
   result = await ProductServices.getAllProductsFromDb();
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

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductsFromDb(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductsFromDb(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      error: err.details,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { product } = req.body;
  const { error, value } = productJoiSchema.validate(product);

  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      error: error.details,
    });
  }

  const { productId } = value;
  console.log(productId);

  try {
    const productData = await ProductModel.findOne({ productId });

    if (productData) {
      const result = await ProductServices.updateProductsFromDb(value); // Pass validated data
      console.log(result);
      return res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  deleteProduct,
  updateProduct
  // getSearchProducts,
};
