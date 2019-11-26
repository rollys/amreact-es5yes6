/** SPREAD **/

// ES6

const numeros = [1, 2, 3, 4, 5];
const otrosNumeros = [...numeros, 6, 7, 8, 9];

// console.log(...numeros);
// console.log(otrosNumeros);

const datos = {
  name: "Rolly",
  apellido: "Sánchez"
};

const trabajo = {
  profesion: "Profesor",
  curso: "React",
  ...datos
};

console.log(datos);
console.log(trabajo);

/** REST **/

// ES5
function params() {
  console.log("Argumentos", arguments[0]);
}

params(5, 6);

// ES6
const fun = (...mivar) => {
  console.log("rest ope", mivar[1]);
};

fun(1, 2, 3, 4);
