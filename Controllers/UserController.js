import { User } from "../Models/index.js";

class UserController {
  constructor() {}

  getAllUsers = async (req, res, next) => {
    try {
      // const result=await User
      res.status(200).send("ok");
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  createUser = async (req, res, next) => {
    try {
      const { name, lastName, password, email } = req.body;
      const result = await User.create({ name, lastName, password, email });
      if (!result) throw new Error("No se pudo crear al usuario");
      res.status(200).send({
        success: true,
        message: "Usuario creado con exito",
        result,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;
