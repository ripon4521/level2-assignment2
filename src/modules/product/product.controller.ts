import { Request, Response } from 'express';
import { ProductServices } from './product.services';
import productJoiSchema from './product.validation';

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
if (seacrh.search) {
  const value = seacrh.search;
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


const getSearchProducts = async (req: Request, res: Response) => {
  try {
    const {  search } = req.query;
    const result = await ProductServices.getSearchProductsFromDb(search);
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

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProducts,
  deleteProduct,
  getSearchProducts,
};
