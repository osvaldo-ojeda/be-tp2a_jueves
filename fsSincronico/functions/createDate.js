const fs = require("fs");

function createDate(nombreArchivo) {
  try {
    if (!nombreArchivo) throw "pasame el nombre del archivo"
    const date = new Date().toLocaleString();
    fs.appendFileSync(`./${nombreArchivo}.txt`, `${date}\n ` )
    return "ok fecha creada"
  } catch (error) {
    return error
  }
}

module.exports = createDate;
