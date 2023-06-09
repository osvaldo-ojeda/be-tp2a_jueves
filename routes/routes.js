import { Router } from "express";
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";
const routes= Router()

routes.use("/products", productRoutes)
routes.use("/users", userRoutes)

export default routes
