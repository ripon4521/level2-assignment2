import { ProductModel } from '../product.model';
import { Product } from './product.interface';

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductsFromDb = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};



export const ProductServices = {
    createProductDB,
    getAllProductsFromDb,
    getSingleProductsFromDb

};
