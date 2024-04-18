/*Variables*/
let nombre = 'Daniel';
var edad = 57;
/*let nombre = 'Gloria';*/
console.log(nombre);
console.log(edad);
console.log('Mi nombre es '+nombre + ' y mi edad es de '+edad + ' años');
/*Tipo de datos*/
// let dato = {
//     "hija": "Indira",
//     "hijoMayor": "Victor",
//     "hijoMenor": "Luis"
// };    

let dato = true;
console.log(typeof(dato));
console.log(dato);

/*Operadores: Aritméticos*/
let valor1 = 100;
valor1+=5;
// valor1 = valor1 + 1;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(resultado);
/*Operadores de comparación*/
console.log(valor1 > valor2);
let numero1 = 100;
let numero2 = 20;
let numero3 = 500;
console.log(numero1 === numero2);

/*Operadores lógicos*/
console.log(numero1 > numero2 ||  numero1 > numero3);


let suma = 5 + 3; // 8
console.log(suma);
let resta = 10 - 4; // 6
let multiplicacion = 2 * 3; // 6
let division = 15 / 3; // 5
let modulo = 10 % 3; // 1

let numero = 5;
numero++; // incremento, ahora numero es 6
numero--; // decremento, ahora numero es 5


let persona = {
    nombre: 'Juan',
    edad: 30
   };
   
   console.log(persona.nombre); // 'Juan'
   console.log(persona['edad']); // 30
   