import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

router.post('/api/products', ProductController.createProduct);

router.get('/api/products', ProductController.getAllProducts);

// router.get('/:studentId', StudentController.getSingleStudent);

export const ProductRoutes = router;
