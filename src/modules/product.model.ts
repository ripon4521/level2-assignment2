
import { model, Schema } from 'mongoose';
import { Product } from './product/product.interface';


const productSchema = new Schema<Product>({
    name: {type: String , required: true},
    productId : {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number , required: true},
    category: {type: String , required: true},
    tags:{type: [String] , required: true},
    variants:[
        {
            type:{type: String , required: true},
            value: {type: String , required: true}
        },
        {
            type: {type: String , required: true},
            value:{type: String , required: true}
        }
    ],
    inventory : {
        quantity: {type: Number , required: true},
        inStock: {type: Boolean , required: true}
    },
   
});


// productSchema.pre("find", function(next){
//     this.find({name: {$in : "ipho"}})
//   next()
// })
// productSchema.pre("findOne", function(next){
//     this.find({isDelete: {$ne : true}})
//   next()
// })



export const ProductModel = model<Product>('Product', productSchema);
