/** METODOS O FUNCIONES MÁS USADAS **/

const anios = [1990, 1995, 1999, 2003];

//ES5
var edad = [];
for (var i = 0; i < anios.length; i++) {
  edad.push(2019 - anios[i]);
}
console.log("edad", edad);

//ES6
// devuelve un array con la misma cantidad de items que se esta iterando
const edadMap = anios.map(item => {
  return 2018 - item;
});

console.log("edadMap", edadMap);

// Devuelve un array de los valores que coinciden con la condición evaluada
const menores20 = edadMap.filter(item => item <= 20);

console.log("menores20", menores20);

// Devuelve el 1er item que coincide con la condición evaluada
const buscar23 = edadMap.find(item => item == 23);
console.log("buscar23", buscar23);
