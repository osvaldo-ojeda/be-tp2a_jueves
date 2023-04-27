const fs = require("fs");
const createDate=require("./functions/createDate")
const readFecha=require("./functions/readDate")

// esto es para leer
function read() {
  try {
    const read = fs.readFileSync("./package.json", "utf-8");
    return read;
  } catch (error) {
    return error;
  }
}

// console.log("🚀 ----------------------------------🚀");
// console.log("🚀 read:", read());
// console.log("🚀 ----------------------------------🚀");

// este es para escribir

function write(params) {
  try {
    if (!params) throw "pasale un parametro rata";
    fs.writeFileSync("./notas.txt", params);
    return "archivo escrito con exito";
  } catch (error) {
    return error;
  }
}
// console.log(write("mucha data"));


function appen(params) {
    try {
        if (!params) throw "pasale un parametro rata";
        fs.appendFileSync("./notas.txt", `\n${params}`)
        return "archivo escrito con exito";
    } catch (error) {
        return error
    }
}

// console.log(appen("nodificando la nota"))

// console.log(createDate("mifecha"))
console.log(readFecha("mifecha"))
