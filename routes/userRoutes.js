import { Router } from "express";
import UserController from "../Controllers/UserController.js";
const userRoutes=Router()
const userController = new UserController()

userRoutes.get("/", userController.getAllUsers)
userRoutes.get("/:id")
userRoutes.put("/:id")
userRoutes.post("/", userController.createUser)
userRoutes.delete("/:id")

export default userRoutes
