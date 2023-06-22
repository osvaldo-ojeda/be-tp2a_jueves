import { Router } from "express";
import UserController from "../Controllers/UserController.js";
import validateLogin from "../middlewares/validateLogin.js";
import validateAdmin from "../middlewares/validateAdmin.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

userRoutes.get("/me", validateLogin, userController.me);
userRoutes.use(validateLogin);
userRoutes.post("/logout", userController.logout);
userRoutes.get("/:id");
userRoutes.use(validateAdmin);
userRoutes.get("/", userController.getAllUsers);
userRoutes.put("/:id");
userRoutes.delete("/:id");

export default userRoutes;
