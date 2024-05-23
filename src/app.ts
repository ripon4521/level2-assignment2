import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/product/product.route';
import { OrderRoutes } from './modules/order/order.route';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/', ProductRoutes);

app.use('/', OrderRoutes);

const GetAcontroller = (req: Request, res: Response) => {
  res.send('Welcome to the assignment 2 server');
};
app.get('/', GetAcontroller);

export default app;
