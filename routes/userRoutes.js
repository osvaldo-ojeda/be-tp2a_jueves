import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import validateLogin from "../middlewares/validateLogin.js";
const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

userRoutes.get("/me", validateLogin, userController.me);
userRoutes.use(validateLogin);
userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id");
userRoutes.put("/:id");
userRoutes.delete("/:id");
userRoutes.post("/logout", userController.logout);

export default userRoutes;
