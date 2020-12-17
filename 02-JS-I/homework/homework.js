// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Saludos a HENRY";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1982;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var miString=str;
  return miString;
}
devolverString("Mi funcion a prueba")

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumaDosNumeros=x+y;
  return sumaDosNumeros;
}
suma (19+38)

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restaDosNumeros=x-y;
  return restaDosNumeros;
}
resta(40,38)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var MutiplicaDosNumeros=x*y;
  return MutiplicaDosNumeros;
}
multiplica(19,38)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var divideDosNumeros=x/y;
  return divideDosNumeros;
}
divide(38,2)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if( x === y){
  return  true;
  }  
  {
  return false;
  }
}
sonIguales(19,19)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length===str2.length) 
  {
  return true  
  }
  {
  return false
  }
}
var saludo="hola";
var despedida="adios";
tienenMismaLongitud(saludo, despedida)

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
if (num<90) {
  return true;
}
{
  return false;
}
}
menosQueNoventa(48)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50) {
    return true;    
  }
  return  false;
}
mayorQueCincuenta(71)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var obtengoResto=x%y;
  return obtengoResto;
}
obtenerResto(34,6)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==0) {
    return true;
  }
  {
    return false;
  }
}
esPar(10)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==1) {
  return true;  
  }
  {
    return false;
  }
}
esImpar(11)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var elevoAlCuadrado=Math.pow(num,2) ;
  return elevoAlCuadrado;
}
var miNumero=10
elevarAlCuadrado(miNumero)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var elevoAlCubo=Math.pow(num,3);
  return elevoAlCubo;
}
elevarAlCubo(15)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
 var elevoNumero = Math.pow(num,exponent)
 return elevoNumero; 
}
elevar(4,8)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeoNumeroProximo = Math.round(num);
  return  redondeoNumeroProximo;
}
redondearNumero(38.57)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondeoHaciaArriba = Math.ceil(num);
  return redondeoHaciaArriba;
}
redondearHaciaArriba(19.002)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var agregoSimbolo = (str+"!")
  return agregoSimbolo;
}
agregarSimboloExclamacion("buenas noches")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreYApellido = (nombre+" "+apellido)
  return nombreYApellido;
}
combinarNombres("Ivanoff","Garcia")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var combinoElSaludo = ("Hola"+" "+nombre+"!")
  return combinoElSaludo;
}
obtenerSaludo("HENRY")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var areaRectangulo = alto * ancho;
  return areaRectangulo;
}
obtenerAreaRectangulo(10,15)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
