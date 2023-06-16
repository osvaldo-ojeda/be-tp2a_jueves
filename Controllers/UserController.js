import { User } from "../Models/index.js";
import { generarToken } from "../utils/token.js";


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
      if (!result) {
        const error = new Error("No se pudo crear al usuario");
        error.status = 400;
        throw error;
      }
      res.status(200).send({
        success: true,
        message: "Usuario creado con exito",
        result,
      });
    } catch (error) {
      // res.status(400).send({
      //   success: false,
      //   message: error.message,
      // });
      next(error);
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password: passwordTextoPlano } = req.body;
      const result = await User.findOne({
        where: {
          email,
        },
      });
      if (!result) {
        const error = new Error("Credenciales chucu");
        error.status = 400;
        throw error;
      }
      const comparePassword = await result.validatePassword(passwordTextoPlano);
      //  const comparePassword = await result.validatePassword(passwordTextoPlano, result.password);
      if (!comparePassword) {
        const error = new Error("Credenciales chucu");
        error.status = 400;
        throw error;
      }
      
      const payload={
        id:result.id,
        email:result.email
      }

      generarToken(payload)
     

      res.status(200).send({
        success: true,
        message: "Usuario logueado con exito",
      });
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
