/** CLASES **/

// ES5
var Persona = function(name, gender) {
  this.name = name;
  this.gender = gender;
};

var personita1 = new Persona("Miguel", "Masculino");

Persona.prototype.consultaGenero = function() {
  console.log(`Hola me llamo ${this.name} y mi genero es, ${this.gender}`); // template literals
};

personita1.consultaGenero();
// console.log(personita1);

// ES6

class Vehiculo {
  constructor(puerta) {
    this.puerta = puerta;
  }

  cantidadLLantas(llantas) {
    return llantas;
  }
}

class Bicicleta extends Vehiculo {
  cantidadLuces() {
    return 1;
  }

  static tieneTimon() {
    return true;
  }

  cantidadLLantas() {
    console.log("desde clase hija - llanta", super.cantidadLLantas(2));
    return "llantas";
  }
}

const auto = new Vehiculo(7);
console.log("Llantas auto", auto.cantidadLLantas(4));

const bici = new Bicicleta();
console.log("luces bici", bici.cantidadLuces());
console.log("Llantas bici", bici.cantidadLLantas());
// console.log('timon bici' , bici.tieneTimon());

console.log(Bicicleta.tieneTimon());
