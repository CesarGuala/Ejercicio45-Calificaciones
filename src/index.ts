/*Calificaciones

Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:

• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/

let nombreDelalumno = prompt("ingrese nombre del alumno o vacio para finalizar");
let notaFinal: number = 0;

  while (nombreDelalumno !== "") {
let notaPractica:number =  Number  (prompt("ingrese nota practica"));
let notaProblemas:number = Number  (prompt("ingrese nota problemas"));
let notaTeorica:number =   Number  (prompt("ingrese nota teorica"));
  if (
notaPractica  <= 10 &&
notaPractica  >=  0 &&
notaProblemas <= 10 &&
notaProblemas >=  0 &&
notaTeorica   <= 10 &&
notaTeorica   >=  0 
) 
  {
notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;
console.log(
  "La nota final del alumno" + nombreDelalumno + " es: " + notaFinal
);
  }
 else {
console.log("error en insgreso de notal del alumno");
  }
nombreDelalumno = prompt("ingrese nombre del alumno");
  }
