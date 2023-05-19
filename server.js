import express from "express";
import connection from "./connection/connection.js";
const app = express();

//momentaneamente
import User from "./Models/User.js";
import Product from "./Models/Product.js";
import Category from "./Models/Category.js";


await connection.sync({ force: false }).then(() => {
  app.listen(8080, () => {
    console.log("server ok http://localhost:8080");
  });
});
