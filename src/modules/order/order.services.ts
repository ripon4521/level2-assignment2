import { OrderModel } from "../order.model";
import { Order } from "./order.interface";



const createOrderDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDb = async () => {
  const result = await OrderModel.find();
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSearchOrderFromDB = async (searchValue:any) => {

    // const item = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // const value = new RegExp(searchValue, "i")
    const result = await OrderModel.find({email: searchValue})
    return result;
  };
  






export const OrderServices = {
    createOrderDB,
    getAllOrderFromDb,
    getSearchOrderFromDB
    // getAllProductsFromDb,
   

};
