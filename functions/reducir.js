// function reducir(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // if (obj[element]) {
//     //   obj[element]++;
//     // } else {
//     //   obj[element] = 1;
//     // }
//     // --------------
//     // if (obj[element]) obj[element]++;
//     // if (!obj[element]) obj[element] = 1;
//     // --------------
//     // obj[element] ? obj[element]++ : (obj[element] = 1);
//     // --------------
//     obj[element]++ || (obj[element] = 1);
//   }
//   return obj;
// }



function reducir(array) {
    const obj = array.reduce((acumulador,elemento)=>{
      acumulador[elemento] ? acumulador[elemento]++ : (acumulador[elemento] = 1);
      return  acumulador
    }, {})
    return obj;
  }

  module.exports=reducir