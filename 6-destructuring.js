/** DESTRUCTURING **/

const miarr = [1, 2, 3, 4];

// ES5
const val1 = miarr[0];
const val2 = miarr[1];

// ES6
const [, , c, d] = miarr;

console.log("c", c);
console.log("d", d);

const miobj = {
  ind1: 1,
  ind2: 2,
  ind3: 3
};

const { ind3: indice3, ind2, ind4 = 8 } = miobj;

console.log("ind3", indice3);
console.log("ind4", ind4);
