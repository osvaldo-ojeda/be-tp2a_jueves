const fs = require("fs");

function read() {
  fs.readFile("./package.json", "utf-8", (error, contenido) => {
    if (error) {
      console.log(error);
    } else {
      console.log(contenido);
      return contenido;
    }
  });
}

console.log(read());
