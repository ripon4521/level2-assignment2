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




// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSearchProductsFromDb = async (searchValue:any) => {

  const item = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const value = new RegExp(item, "i")
  const result = await ProductModel.find({name: value})
  return result;
};




const deleteProductsFromDb = async (_id: string) => {
  const result = await ProductModel.deleteOne({ _id });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateProductsFromDb = async (product : any) => {
  const { productId, ...updateData } = product;
  const result = await ProductModel.findOneAndUpdate(
    { productId }, // Filter
    updateData,    // Update data
    { new: true }  // Return the updated document
  );
  return result;
};




export const ProductServices = {
    createProductDB,
    getAllProductsFromDb,
    getSingleProductsFromDb,
    deleteProductsFromDb,
    getSearchProductsFromDb,
    updateProductsFromDb

};
