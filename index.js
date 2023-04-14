// ejemplo de callbacks
// function uno(fn2) {
//   console.log("soy 1");
//   fn2();
// }
// function dos() {
//   console.log("soy 2");
// }

// function mostrarNumeros(fn1, fn2) {
//   fn1(fn2);
// }
// mostrarNumeros( uno, dos);
// ----------------------------
function uno() {
  // console.log("soy 1");
  return "soy 1";
}

function dos() {
  return "soy 2";
}

function tres() {
  setTimeout(() => {
    console.log("soy el clg del 3");
    return "soy 3";
  }, 2000);
  return "hola soy el return 3";
}

function cuatro(cuatro) {
  return new Promise((resolve, reject) => {
    if (cuatro === 4) {
      resolve("soy 4");
    } else {
      reject("Pusiste cualquier número");
    }
  });
}

function cinco() {
  return "soy 5";
}

console.log(uno());
// setTimeout(dos, 2000);
console.log(dos());
console.log(tres());
// console.log(cuatro(4));

// cuatro(3)
// .then(console.log)
// .catch(console.log);

cuatro(4)
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
.finally(()=>console.log("promesa finalizada"))

console.log(cinco());
