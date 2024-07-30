// String
// Comillas doble
var saludo1 = "Hola a todos!";
// Comillas simples
var saludo2 = 'Hola a todos!';
// Template literals (backticks)
var nombre = "Juan";
var edad = 30;
var saludo3 = "Hola mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
// Numeros
// Numeros enteros
var num1 = 10;
// Notación exponencial
var num2 = 2.5e3; // 2.5 * 10^3 = 2500
// Notación exponecial negativa
var num3 = 1.5e-2; // 1.5 * 10^-2 = 0.015
// Hexadecimales (base 16) utilizando el prefijo "0x"
var num4 = 0xA; // valor decimal: 10
// Octales (base 8) utilizando el prefijo "0o"
var num5 = 10; // valor decimal: 10
// Binarios (base 2) utilizando el prefijo "0b"
var num6 = 10; // valor decimal: 10
// Undefined 
// Declaración de una variable con valor undefined
var variableUndefined;
// Asignación de valor undefined
variableUndefined = undefined;
// NULL
// Declaración de una variable con valor null
var variablenull;
// Asignación del valor null
variablenull = null;
// Objeto
var empleado = {
    nombre: "Antonio",
    edad: 18,
    casado: false,
    habilidades: ['Cantar', 'Bailar', 'Escribir'],
    casa: undefined,
    departamento: null
};
// Arrays
// arreglo de numeros
var numero = [1, 2, 3];
// arreglo de cadenas de texto
var nombres = ["Juan", "Maria", "Pedro"];
// arreglo de booleanos
var valoresBool = [true, false, true];
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
var dividir = function (a, b) { return a / b; };
// funciones con parametros opcionales
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return "Hola, mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
    }
    else {
        return "Hola, mi nombre es ".concat(nombre, ".");
    }
}
// funciones con parametros por defecto
function saludar2(nombre, edad) {
    if (edad === void 0) { edad = 30; }
    return "Hola, mi nombre es ".concat(nombre, " y tengo ").concat(edad, " a\u00F1os.");
}
// Clases
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, es mi nombre ".concat(nombre, "."));
    };
    return Persona;
}());
/*
  TIPOS DE DATOS
  - Primitivos: string, number, boolean, undefined, null
  - Compuestos structurados: object, array, enum, function
  - Definidos por el usuario: class, interface, type

*/ 
