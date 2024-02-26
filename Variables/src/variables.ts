// Variables
let valorNumerico = 3000;
let caracterAlfabetico = "palabra";
let estadoActual = false;

// Si inicializamos una variable en ts a este se le asignara el tipo de dato
console.log(typeof(valorNumerico));
console.log(typeof(caracterAlfabetico));
console.log(typeof(estadoActual));

// En cambio es recomendable inicializar las variables con sus tipos correspondientes
let numero: number = 200;
let nombre: string = "Carlos";
let estado: boolean = true;