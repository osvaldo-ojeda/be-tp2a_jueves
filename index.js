import express from "express";
const app = express();

import router from "./routes/index.js";
// por si hace falta
// import connection from "./connection/index.js";


//midleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use("/api", router);


//server
app.listen(8080, () => {
  console.log("puerto ok http://localhost:8080");
});
