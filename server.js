import express from "express";
import connection from "./connection/connection.js";
const app = express();





app.listen(8080, () => {
  console.log("server ok http://localhost:8080");
});
