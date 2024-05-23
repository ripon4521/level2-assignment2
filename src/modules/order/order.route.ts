import express from 'express';
import { OrderController } from './order.controler';
const router = express.Router();

router.post('/api/orders', OrderController.createOrder);

router.get('/api/orders', OrderController.getAllOrders);

// router.get('/api/products', ProductController.getSearchProducts);

// router.get('/api/products/:productId', ProductController.getSingleProducts);

// router.delete('/api/products/:productId', ProductController.deleteProduct);

// router.put('/api/products/:productId', ProductController.updateProduct);



export const OrderRoutes = router;
