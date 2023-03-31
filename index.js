// const {saludar, chau} = require("./functions/saludar");
const saludar = require("./functions/saludar");

const marcasAutos = [
  "ford",
  "renault",
  "chevrolet",
  "kia",
  ["mercedez", "volvo"],
];
const copiaMarcasAuto = marcasAutos;
copiaMarcasAuto[0] = "Ford";

const copiaAutosHard = [
  marcasAutos[0],
  marcasAutos[1],
  marcasAutos[2],
  marcasAutos[3],
];
copiaAutosHard[0] = "ford";

const copiaAutosSlice = marcasAutos.slice();
copiaAutosSlice[1] = "bmw";

const copiaAutosSpread = [...marcasAutos];
copiaAutosSpread[4][1] = "VOLVO";
// console.log("🚀 ------------------------------------------------🚀");
// console.log("🚀  marcasAutos:", marcasAutos);
// console.log("🚀  copiaMarcasAuto:", copiaMarcasAuto);
// console.log("🚀  copiaAutosHard:", copiaAutosHard);
// console.log("🚀  copiaAutosSlice:", copiaAutosSlice);
// console.log("🚀  copiaAutosSpread:", copiaAutosSpread);
// console.log("🚀 ------------------------------------------------🚀");

function copiaConFor(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //   newArray[index] = element;
    newArray.push(element);
  }
  return newArray;
}

const newArray = copiaConFor(marcasAutos);
newArray[1] = "RENAULT";

// console.log("🚀  copiaConFor:", newArray);
// console.log("🚀  marcasAutos:", marcasAutos);

function copiaConForEach(array) {
  const newArray = [];
  array.forEach(function (element, index, array) {
    // console.log("🚀  element:", element);
    // console.log("🚀  index:", index);
    // console.log("🚀  array:", array);
    newArray.push(element);
  });
  return newArray;
}
// console.log(copiaConForEach(marcasAutos));

const copiaJSON = JSON.parse(JSON.stringify(marcasAutos));
copiaJSON[0] = "dodge";
copiaJSON[4][0] = "";
// console.log("🚀 ---------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:61 ~ marcasAutos:", marcasAutos);
// console.log("🚀 ~ file: index.js:61 ~ copiaJSON:", copiaJSON);
// console.log("🚀 ~ file: index.js:61 ~ copiaJSON:", copiaJSON[0]);
// console.log("🚀 ---------------------------------------------🚀");

///esto tambien hace copia superficial
const copiaConObjetAssign = Object.assign([], marcasAutos);
copiaConObjetAssign[4][0] = "toyota";
// console.log("🚀 ----------------------------------------🚀");
// console.log("🚀 copiaConObjetAssign:", copiaConObjetAssign);
// console.log("🚀 marcasAutos:", marcasAutos);
// console.log("🚀 ------------------------------------------🚀");

// ----------------------------

const userData = {
  nombre: "Juan",
  apellido: "Gomez",
  edad: "30",
  mascotas: {
    gato: "michi",
  },
};
let apellido = "apellido";
// console.log("🚀 -------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:84 ~ userData:", userData);
// console.log("🚀  userData dotNotation:", userData.nombre);
// console.log("🚀  userData bracketNotation:", userData["edad"]);
// console.log("🚀  userData bracketNotation:", userData[apellido]);
// console.log("🚀 -------------------------------------------🚀");

const copiaUserData = userData;
copiaUserData.nombre = "Juana";
// console.log("🚀 -----------------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:93 ~ copiaUuserDataserData:", userData);
// console.log("🚀 ~ file: index.js:93 ~ copiaUserData:", copiaUserData);
// console.log("🚀 -----------------------------------------------------🚀");

// //  copias superficiales
// const objSpread = { ...userData };
// objSpread.nombre = "Pepa";
// console.log("🚀 ----------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:100 ~ userData:", userData);
// console.log("🚀 ~ file: index.js:100 ~ objSpread:", objSpread);
// console.log("🚀 ----------------------------------------------🚀");

const copiaObjetAssign = Object.assign({}, userData);
// console.log(
//   "🚀 ------------------------------------------------------------🚀"
// );
// console.log("🚀 ~ file: index.js:108 ~ userData:", userData);
// console.log("🚀 ~ file: index.js:108 ~ copiaObjetAssign:", copiaObjetAssign);
// console.log(
//   "🚀 ------------------------------------------------------------🚀"
// );

// copia profunda

const copiaStructureClone = structuredClone(userData);
copiaStructureClone.edad = 20;
copiaStructureClone.mascotas.gato = "tom";
// console.log(
//   "🚀 ------------------------------------------------------------------🚀"
// );
// console.log("🚀  userData:", userData);
// console.log("🚀 copiaStructureClone:", copiaStructureClone);
// console.log(
//   "🚀 ------------------------------------------------------------------🚀"
// );

const copiaJsonStringify = JSON.parse(JSON.stringify(userData));
// console.log("🚀 ----------------------------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:135 ~ copiaJsonStringify:", copiaJsonStringify)
// console.log("🚀 ----------------------------------------------------------------🚀")

// ---------------
for (const key in copiaStructureClone) {
  // if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];
  // }
  //  console.log(key)
  //   console.log(copiaStructureClone[key]);
}

// console.log("keys", Object.keys(copiaStructureClone))

// -----------------------------------
const numeros = [1, 2, 3, 3, 4];
console.log("🚀 ------------------------------------------🚀");
console.log("🚀 ~ file: index.js:156 ~ numeros:", (numeros.length = 0));
console.log("🚀 ~ file: index.js:156 ~ numeros:", numeros);
console.log("🚀 ------------------------------------------🚀");

// / Reducir Ejercicio: resumir las instancias de cada uno de estos en un solo objeto
// Ejemplo:
// var mascotas = ['perro', 'gato', 'perro'];
// Resultado: { 'perro': 2, 'gato': 1 }

let cosas = [
  "pelota",
  "pelota",
  "auto",
  "silla",
  "auto",
  "kuka",
  "compu",
  "kuka",
  "kuka",
  "compu",
  "pelota",
  "moto",
  "avion",
  "avion",
  "planta",
  "planta",
  "planta",
];

// chau();
saludar();
