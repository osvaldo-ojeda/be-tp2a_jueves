import express from "express";
import connection from "./connection/connection.js";
const app = express();
import { serverPort } from "./config/config.js";
import routes from "./routes/routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

await connection.sync({ force: false }).then(() => {
  app.listen(serverPort, () => {
    console.log(`server ok http://localhost:${serverPort}`);
  });
});
