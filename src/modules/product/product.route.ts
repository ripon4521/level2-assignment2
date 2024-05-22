import express from 'express';
import { ProductController } from './product.controller';
const router = express.Router();

router.post('/api/products', ProductController.createProduct);

// router.get('/', StudentController.getStudents);

// router.get('/:studentId', StudentController.getSingleStudent);

export const ProductRoutes = router;
