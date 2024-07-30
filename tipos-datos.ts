// String
// Comillas doble
const saludo1: string = "Hola a todos!";

// Comillas simples
const saludo2: string = 'Hola a todos!';

// Template literals (backticks)
const nombre: string = "Juan";
const edad: number = 30;

const saludo3: string = `Hola mi nombre es ${nombre} y tengo ${edad} años.`

// Numeros
// Numeros enteros
const num1: number = 10;

// Notación exponencial
const num2: number = 2.5e3; // 2.5 * 10^3 = 2500

// Notación exponecial negativa
const num3: number = 1.5e-2; // 1.5 * 10^-2 = 0.015

// Hexadecimales (base 16) utilizando el prefijo "0x"
const num4: number = 0xA; // valor decimal: 10

// Octales (base 8) utilizando el prefijo "0o"
const num5: number = 0o12; // valor decimal: 10

// Binarios (base 2) utilizando el prefijo "0b"
const num6: number = 0b1010; // valor decimal: 10

// Undefined 
// Declaración de una variable con valor undefined
let variableUndefined: undefined;

// Asignación de valor undefined
variableUndefined = undefined;

// NULL
// Declaración de una variable con valor null
let variablenull: null;

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
const numero: number[] = [1, 2, 3];

// arreglo de cadenas de texto
const nombres: string[] = ["Juan", "Maria", "Pedro"];

// arreglo de booleanos
const valoresBool: boolean[] = [true, false, true];

// Enum
// definición de enum para días de la semana
enum DiasSemana {
  Lunes,
  Martes,
  Miércoles,
  Jueves,
  Viernes
}

// enum con valores de cadena (String Enums)
enum Colores {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "Azul"
}

// Funciones
// declaración de funciones con tipo de datos explicitos
function sumar(a: number, b: number): number {
  return a + b;
} 

// funciones fecha de retorno implicito (inferido por typescript)
const dividir = (a: number, b: number) => a / b;

// funciones con parametros opcionales
function saludar(nombre: string, edad?: number): string {
  if(edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  }
  else {
    return `Hola, mi nombre es ${nombre}.`
  }
}

// funciones con parametros por defecto
function saludar2(nombre: string, edad: number = 30): string {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}

// Clases
class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, es mi nombre ${nombre}.`)
  }
}

// Interfaces
// inteface básica
interface Persona {
  nombre: string;
  edad: number;
}

// intefaces con propiedades opcionales
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// interface para funciones
interface Comparador {
  (a: number, b: number): boolean;
}

// interface para clases (class interfaces)
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}

// Types
// types básicos
type Numero = number;

// type básico objeto literal
type Persona1 = {
  nombre: string;
  edad: number;
}

// type con union de types
type Nombre = string | null;

// type con propiedades opcionales
type Producto1 = {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// type para funciones
type Comparador1 = {
  (a: number, b: number): boolean;
}

// type para clases (class types)
type Persona2 = {
  nombre: string,
  edad: number,
  saludar(): void;
}

/* 
  TIPOS DE DATOS
  - Primitivos: string, number, boolean, undefined, null
  - Compuestos structurados: object, array, enum, function
  - Definidos por el usuario: class, interface, type

*/