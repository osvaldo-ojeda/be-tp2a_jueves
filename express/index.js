const express = require("express");
const app = express();
let count = 0;

app.post("/", (req, res) => {
  res.send("post / ok");
});
app.put("/", (req, res) => {
  res.send("put / ok");
});

app.get("/saludar/obj", (peticion, respuesta) => {
  respuesta.send({ nombre: "osvaldito", edad: 36 });
});

app.get("/saludar", (peticion, respuesta) => {
  respuesta.send("Saludos terricola");
});

app.get("/contador", (peticion, respuesta) => {
  count++;
  respuesta.send(`EL contador esta en ${count}`);
});
app.get("/fecha", (peticion, respuesta) => {
  respuesta.send(new Date());
});

app.listen(8080, () => {
  console.log("servidor express ok");
});
