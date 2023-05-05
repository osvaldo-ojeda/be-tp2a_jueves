import express from "express";
const app = express();

//importaciones
import morgan from "morgan";

//importaciones
import routes from "./routes/index.js";
import logUrlMethod from "./midlewares/logUrlMethod.js"

//midelwares de aplicacion
// const logUrlMethod = (req, res, next) => {
//   console.log("Url", req.url);
//   console.log("Method", req.method);
//   next();
// };
// app.use(logUrlMethod);
app.use(morgan('tiny'))
//midelwares
// app.use(logUrlMethod,routes);
app.use(routes);
app.listen(8080, () => {
  console.log("\x1b[42m\x1b[37m%s\x1b[0m", "http://localhost:8080");
});
