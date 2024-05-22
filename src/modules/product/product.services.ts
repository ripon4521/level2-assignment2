import { ProductModel } from '../product.model';
import { Product } from './product.interface';

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

// const getStudentsFromDb = async () => {
//   const result = await StudentModel.find();
//   return result;
// };

// const getSingleStudentFromDb = async (_id: string) => {
//   const result = await StudentModel.findOne({ _id });
//   return result;
// };



export const ProductServices = {
    createProductDB,
//   getStudentsFromDb,
//   getSingleStudentFromDb,
};
