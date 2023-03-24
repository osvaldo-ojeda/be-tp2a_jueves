// Array

const userData = ["osvaldito", "ojeda", 36, [], {}];
let index = 2;
userData[index] = 25;

// console.log("🚀 ------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:4 ~ userData:", userData)
// console.log("🚀 ~ file: index.js:4 ~ userData:", userData[0])
// console.log("🚀 ~ file: index.js:4 ~ userData:", userData[index])
// console.log("🚀 ------------------------------------------🚀")
// console.log("🚀 ------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:4 ~ userData:",typeof userData)
// console.log("🚀 ------------------------------------------🚀")

const productos = ["arros", "chocolate", "fideos"];
// agregar cosas al array
productos[3] = "coca-cola";
// productos[7]="queso"
// push para agregar al final
productos.push("manteca");
// unshift para agregar al principio
productos.unshift("cafe");

// pop para quitar del final de un array
productos.pop();

// shift para quitar del pricipio del Array
productos.shift();

// console.log("🚀 ---------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:17 ~ productos:", productos);
// console.log("🚀 ---------------------------------------------🚀");
let productosStr = productos.toString();
let productosJoin = productos.join(" - ");

// console.log("🚀 ---------------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:21 ~ productosStr:", productosStr);
// console.log("🚀 ~ file: index.js:21 ~ productosJoin:", productosJoin);
// console.log("🚀 ---------------------------------------------------🚀");

// copia de un Array
let nombre = "kuka";
let nombre2 = nombre;
// console.log("🚀 ---------------------------------------🚀")
// console.log("🚀 ~ file: index.js:44 ~ nombre:", nombre)
// console.log("🚀 ~ file: index.js:44 ~ nombre2:", nombre2)
// console.log("🚀 ---------------------------------------🚀")
// nombre2="canela"
// console.log("🚀 -----------------------------------------🚀")
// console.log("🚀 ~ file: index.js:51 ~ nombre2:", nombre2)
// console.log("🚀 ~ file: index.js:51 ~ nombre:", nombre)
// console.log("🚀 -----------------------------------------🚀")

const producto1 = ["pera", "banana", ["arroz", "pan"], "fernet"];
const producto2 = producto1;
const producto3 = [...producto1];
// producto3[2] = "cafe";
const producto4 = producto1.slice(1, 3);
// producto4[2]="caramelos"
// console.log("🚀 ---------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:58 ~ producto1:", producto1);
// console.log("🚀 ~ file: index.js:58 ~ producto2:", producto2);
// console.log("🚀 ~ file: index.js:58 ~ producto3:", producto3);
// console.log("🚀 ~ file: index.js:58 ~ producto4:", producto4);
// console.log("🚀 ~ file: index.js:58 ~ producto1:", producto1);
// console.log("🚀 ---------------------------------------------🚀");

// producto2[3] = "manzana";
// console.log("🚀 ---------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:64 ~ producto1:", producto1);
// console.log("🚀 ~ file: index.js:64 ~ producto2:", producto2);
// console.log("🚀 ~ file: index.js:64 ~ producto3:", producto3);
// console.log("🚀 ---------------------------------------------🚀");

const colores = ["azul", "rojo", "naranja", "rosa"];
// const color=[colores[1]]
// console.log("🚀 -------------------------------------🚀")
// console.log("🚀 ~ file: index.js:78 ~ colores:", colores)
// console.log("🚀 ~ file: index.js:78 ~ color:", color)
// console.log("🚀 -------------------------------------🚀")
// color[0]="naranja"
// console.log("🚀 ~ file: index.js:78 ~ colores:", colores)
// --------------------

// for (let i = 0; i < colores.length; i++) {
//   console.log(colores[i]);
// //   console.log(i);
// }

// const colores2=[]
// colores.forEach((element) => {
//     colores2.push(element.toUpperCase())
//     // console.log(element);
// });
// console.log("🚀 -------------------------------------------🚀")
// console.log("🚀 ~ file: index.js:92 ~ colores2:", colores2)
// console.log("🚀 -------------------------------------------🚀")

// Map

function up(e) {
  return e.toUpperCase();
}
// const colores3 = colores.map((e) => e.toUpperCase());
const colores3 = colores.map(up);
console.log("🚀 --------------------------------------------🚀");
console.log("🚀 ~ file: index.js:102 ~ colores3:", colores3);
console.log("🚀 --------------------------------------------🚀");

// callback
function saludar(nombre, fn) {
  return fn(nombre);
}
function decirHola(params) {
  //   return "Hola ", params;
  return `Hola ${params}`;
}
function decirChau(params) {
  return `Chau ${params}`;
}
console.log(saludar("pupi", decirHola));
console.log(saludar("pupi", decirChau));
console.log(
  saludar("pupi", function decirAdios(params) {
    return `Adios ${params}`;
  })
);
console.log(saludar("pupi", (params) => `ByeBye ${params}`));
