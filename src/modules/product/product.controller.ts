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
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDb();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

// const getSingleStudent = async (req: Request, res: Response) => {
//   try {
//     const { studentId } = req.params;
//     const result = await StudentServices.getSingleStudentFromDb(studentId);
//     res.status(200).json({
//       success: true,
//       message: 'Student Get successfully',
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const ProductController = {
    createProduct,
    getAllProducts
//   getSingleStudent,
};
