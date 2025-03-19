"use strict";
// String
// Comillas doble
const saludo1 = "Hola a todos!";
// Comillas simples
const saludo2 = 'Hola a todos!';
// Template literals (backticks)
const nombre = "Juan";
const edad = 30;
const saludo3 = `Hola mi nombre es ${nombre} y tengo ${edad} años.`;
// Numeros
// Numeros enteros
const num1 = 10;
// Notación exponencial
const num2 = 2.5e3; // 2.5 * 10^3 = 2500
// Notación exponecial negativa
const num3 = 1.5e-2; // 1.5 * 10^-2 = 0.015
// Hexadecimales (base 16) utilizando el prefijo "0x"
const num4 = 0xA; // valor decimal: 10
// Octales (base 8) utilizando el prefijo "0o"
const num5 = 0o12; // valor decimal: 10
// Binarios (base 2) utilizando el prefijo "0b"
const num6 = 0b1010; // valor decimal: 10
// Undefined 
// Declaración de una variable con valor undefined
let variableUndefined;
// Asignación de valor undefined
variableUndefined = undefined;
// NULL
// Declaración de una variable con valor null
let variablenull;
// Asignación del valor null
variablenull = null;
// Objeto
const empleado = {
    nombre: "Antonio",
    edad: 18,
    casado: false,
    habilidades: ['Cantar', 'Bailar', 'Escribir'],
    casa: undefined,
    departamento: null
};
// Arrays
// arreglo de numeros
const numero = [1, 2, 3];
// arreglo de cadenas de texto
const nombres = ["Juan", "Maria", "Pedro"];
// arreglo de booleanos
const valoresBool = [true, false, true];
// Enum
// definición de enum para días de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
})(DiasSemana || (DiasSemana = {}));
// enum con valores de cadena (String Enums)
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "Azul";
})(Colores || (Colores = {}));
// Funciones
// declaración de funciones con tipo de datos explicitos
function sumar(a, b) {
    return a + b;
}
// funciones fecha de retorno implicito (inferido por typescript)
const dividir = (a, b) => a / b;
// funciones con parametros opcionales
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}
// funciones con parametros por defecto
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
// Clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, es mi nombre ${nombre}.`);
    }
}
/*
  TIPOS DE DATOS
  - Primitivos: string, number, boolean, undefined, null
  - Compuestos structurados: object, array, enum, function
  - Definidos por el usuario: class, interface, type

*/ 
