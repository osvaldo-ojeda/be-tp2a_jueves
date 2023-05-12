import { Router } from "express";
const userRoutes = Router();
import connection from "../connection/index.js";

userRoutes.get("/", (req, res) => {
  // codigo sql
  res.send("get all users");
});
userRoutes.get("/:id", (req, res) => {
  // codigo sql
  res.send("get user by id");
});
userRoutes.post("/", (req, res) => {
  //desestructuramos el boby para tener los datos
  const { name, lastName, password } = req.body;
  //creamos la query
  const query = `INSERT INTO user(name, lastName, password) VALUES("${name}", "${lastName}", "${password}")`;
  //ejecutamos el metodo query
  connection.query(query, (err, response, fields) => {
    if (err) throw err;
    res.status(201).send("User created");
  });
});
userRoutes.put("/:id", (req, res) => {
  // codigo sql
  res.send("update user by id");
});
userRoutes.delete("/:id", (req, res) => {
  // codigo sql
  res.send("delete user by id");
});

export default userRoutes;

// const obj = {
//   nombre: "pepe",
//   apellido: "ojeda",
// };
// const { nombre, apellido } = obj;
// console.log(nombre)
// console.log(apellido)
