/** VARIABLES **/

//ES5
var nombre = "Rolly";

//ES6
let apellido = "Sánchez";
const ANIO_NACIMIENTO = 1991;

/*********************/

function es5() {
  if (true) {
    var person = "Rolly";
  }
  console.log("ES5");
  console.log(person); // Rolly
}

es5(); // pinta el nombre por el tema de hoisting de js

function es6() {
  const edad = 29;
  if (true) {
    let apellido1 = "Sanchez";
  }
  console.log("ES6");
  console.log(edad);
  console.log(apellido1); // error, debido que el ambito de let es solo del bloque if
}

es6();
