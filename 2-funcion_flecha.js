/** ARROW FUNCTIONS O FUNCIONES FLECHA **/

// Es5
function saludar() {
  console.log("Bienvenidos a la clase de react");
}
// saludar();

function sumar(a, b) {
  return a + b;
}

// console.log(sumar(10, 5));

var restar = function(a, b) {
  return a - b;
};

// console.log(restar(10, 5));

// Es6
const restando = (a, b) => a - b;

const sumando = (a, b) => {
  return a + b;
};

console.log(sumando(10, 6));

// Según el contexto que lo envuelve
function Datos() {
  this.edad = 0;

  setInterval(function() {
    this.edad++; // El contexto de this es el setInterval
    console.log(this.edad); // Pinta  NaN
  }, 1000);
}

// var d = new Datos();

function DatosAF() {
  this.edad = 0;

  setInterval(() => {
    this.edad++; // el contexto de this es al bloque de Datos por que esta dentro deun arrow functions
    console.log(this.edad); // Pinta el incremento de edad
  }, 1000);
}

var daf = new DatosAF();
