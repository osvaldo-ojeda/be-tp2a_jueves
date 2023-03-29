//puedo declarar variables con var y no inicializarlas
console.log("🚀 ~ file: index.js:3 ~ nombre:", nombre);
var nombre;
//esto es redeclarar una variable esto esta muy malllllll
var nombre = "Kuka";
// console.log("🚀 ~ file: index.js:3 ~ nombre:", nombre);
var nombre = "Canela";
nombre = "Juan";
// console.log("🚀 ~ file: index.js:9 ~ nombre:", nombre);

//puedo declarar variables con let y no inicializarlas
//let ya no me permite redeclarar
// console.log("🚀 ~ file: index.js:14 ~ apellido:", apellido)
let apellido;

apellido = "Gomez";

// console.log("🚀 ~ file: index.js:7 ~ apellido:", apellido);

//puedo declarar variables con const y la tengo inicializarlas
// console.log("🚀 ~ file: index.js:22 ~ edad:", edad)
const edad = 0;
// console.log("🚀 ~ file: index.js:11 ~ edad:", edad);

//datos primitivos
// JavaScript has 8 Datatypes
// 1. String
let string = "soy un string";
// 2. Number
let number = 12;
// 3. Bigint
let bigint = 123e5;
// 4. Boolean
let boolean = true; // o false
// 5. Undefined
let undefined;
// 6. Null
let nulo = null;
// 7. Symbol

// datos complejos
// The Object Datatype
// The object data type can contain:
// 1. An object

const obj = {
  nombre: "Pepe",
};
// console.log("🚀 ~ file: index.js:44 ~ obj:", obj);
// 2. An array
const array = [1, "hola", {}];
// 3. A date
const fecha = new Date();
// 4. Function
function saludar(params) {
  //   console.log("🚀 ~ file: index.js:53 ~ saludar ~ params:", params);
}

const saludar2 = (params) => {
  console.log("🚀 ~ file: index.js:53 ~ saludar ~ params:", params);
};

// const sumar = (n1, n2) => {
//   return n1 + n2;
// };
const sumar = (n1, n2) => n1 + n2;
// console.log(sumar(2, 4));
// console.log(sumar());
// console.log(sumar("hola", "osvaldito"));
// console.log(sumar("hola", 3));
// console.log(sumar("8", 3));
// console.log(sumar(4, "5"));
// console.log(sumar(4, "5"));
// console.log(sumar("4", "5"));

// let n1="2"
// let n2="2"
// console.log(n1+n2)

function sumar2(n1, n2) {
  return n1 + n2;
}

// ----------------------------

console.log("🚀 ~ file: index.js:86 ~ restar ~ restar:", restar(1000, 5));
function restar(n1, n2) {
  return n1 - n2;
}

let resultado = restar(5, 3);
console.log("🚀 ~ file: index.js:88 ~ resultado:", resultado);

let resultad2 = function (params) {
  return params;
};
console.log(
  "🚀 ~ file: index.js:91 ~ resultad2 ~ resultad2:",
  resultad2("hola")
);

console.log("🚀 ~ file: index.js:97 ~ resultado3:", resultado3("chau"));
let resultado3 = (algo) => algo;
console.log("🚀 ~ file: index.js:96 ~ resultado3:", resultado3("algo"));
