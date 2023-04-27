const fs = require("fs");

// const read = () => {
//   return fs.promises
//     .readFile("./package.json", "utf-8")
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };

// read();

const read = () => {
  return fs.promises.readFile("./package.json", "utf-8");
};

// read()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

//-------------------
const readAsync = async () => {
  try {
    const read = await fs.promises.readFile("./package.json", "utf-8");
    console.log(read);
  } catch (error) {
    console.log(error);
  }
};

// readAsync();
const uno = () => {
  console.log("clg uno");
};
const dos = () => {
  console.log("clg dos");
};

// async function readNote(name) {
//   try {
//     // if (!name) throw new Error("Sin parametro");
//     if (!name) throw "Sin parametro";
//     const data = await fs.promises.readFile(`./${name}.txt`, "utf-8");
//     console.log(data);
//   } catch (error) {
//     //esto es para new Error()
//     // console.log(error.message);
//     console.log(error);
//   }
// }

const readNote = async (name) => {
  try {
    if (!name) throw new Error("Sin parametro");
    const data = await fs.promises.readFile(`./${name}.txt`, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
// -------------------------

// const appendNotes = async (fileName, notes) => {
//   try {
//     if (!fileName) throw new Error("Sin fileName");
//     if (!notes) throw new Error("Sin notes");
//     await fs.promises.appendFile(`./${fileName}.txt`, notes);
//     await readNote("notes");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const appendNotes = (fileName, notes) => {
  try {
    if (!fileName) throw new Error("Sin fileName");
    if (!notes) throw new Error("Sin notes");
 fs.promises.appendFile(`./${fileName}.txt`, notes);
  } catch (error) {
    console.log(error.message);
  }
};

// -------------------------
console.log("inicio");
uno();
appendNotes("notes", "mas then");
dos();
console.log("fin");
