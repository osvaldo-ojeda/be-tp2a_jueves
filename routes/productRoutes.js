import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";
const productRoutes = Router();

const productController = new ProductController();


productRoutes.get("/", productController.getAllProduct);
productRoutes.get("/:id", productController.getProductById);

export default productRoutes;
