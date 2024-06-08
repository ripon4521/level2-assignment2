import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

router.post('/api/products', ProductController.createProduct);

router.get('/api/products', ProductController.getAllProducts);

// router.get('/api/products', ProductController.getSearchProducts);

router.get('/api/products/:productId', ProductController.getSingleProducts);

router.delete('/api/products/:productId', ProductController.deleteProduct);

router.put('/api/products/:_id', ProductController.updateProduct);



export const ProductRoutes = router;
