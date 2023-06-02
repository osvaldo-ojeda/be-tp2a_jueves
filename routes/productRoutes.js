import { Router } from "express";
import ProductController from "../Controllers/ProductController.js";
const productRoutes = Router();

const productController = new ProductController();

productRoutes.get("/", productController.getAllProduct);
productRoutes.get("/:id", productController.getProductById);
productRoutes.post("/", productController.createProduct);
productRoutes.put("/:id", productController.updateProcuct);

export default productRoutes;
