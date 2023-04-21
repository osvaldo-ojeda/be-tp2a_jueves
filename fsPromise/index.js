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

readAsync();
