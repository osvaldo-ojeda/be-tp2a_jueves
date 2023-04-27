const fs = require("fs");

function readDate(nombreArchivo) {
  try {
    if (!nombreArchivo) throw "pasame el nombre del archivo"
    return fs.readFileSync(`./${nombreArchivo}.txt`, "utf-8" ) 
  } catch (error) {
    return error
  }
}

module.exports = readDate;