import { OrderModel } from "../order.model";
import { Order } from "./order.interface";



const createOrderDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

// const getAllProductsFromDb = async () => {
//   const result = await ProductModel.find();
//   return result;
// };






export const OrderServices = {
    createOrderDB
    // getAllProductsFromDb,
   

};
