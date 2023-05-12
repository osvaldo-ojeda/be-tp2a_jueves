//conexion
import mysql from "mysql2";
// console.log("🚀 ~ file: index.js:8 ~ mysql:", mysql)
const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "jueves",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

export default connection