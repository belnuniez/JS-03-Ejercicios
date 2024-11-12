// EJERCICIO 1
//----------------------------------------------------------------------------------------------

// Crea una variable llamada "edad" y asígnale un número. 
// Escribe un condicional if compuesto que imprima un mensaje diferente en consola dependiendo si:
// - La edad es menor a 13.
// - La edad está entre 13 y 18.
// - La edad es mayor a 18.


// 1. Declaro una variable llamada "edad" y le asigno un valor numérico

var edad = 15;

// 2. Inicio una estructura condicional "if" para evaluar la variable "edad"

if (edad < 13) {

    // 3. Si la edad es menor a 13, este bloque se ejecutará.
    console.log('El usuario es menor a 13 años');

} else if (edad >= 13 && edad <= 18) {

    // 4. Si la condición anterior no se cumple y la edad está entre 13 y 18, entonces se ejecutará este bloque.
    //    Uso el operador lógico "&&" para verificar dos condiciones:
    //    que la edad sea mayor o igual a 13 Y menor o igual a 18.
    console.log('El usuario tiene entre 13 a 18');

} else {

    // 5. Si ninguna de las condiciones anteriores se cumple, se ejecutará este bloque "else".
    //    En este caso, significa que la edad es mayor a 18.
    console.log('El usuario ya es un adulto')
}




// EJERCICIO 2
//-----------------------------------------------------------------------------------------------

// Declara una variable llamada "temperatura" y asígnale un valor numérico.
// Escribe un condicional if anidado que haga lo siguiente:
// - Si la temperatura es menor que 0, imprime "Hace mucho frío".
// - Si está entre 0 y 15, imprime "Hace frío".
// - Si está entre 16 y 30, imprime "Hace un clima agradable".
// - Si es mayor a 30, imprime "Hace calor".


// 1. Declaro una variable "temperatura" y le asigno un valor numérico

var temperatura = 25;

// 2. Estructura condicional "if" para evaluar el valor de la variable

if (temperatura < 0) {

    // 3. Si la temperatura es menor que 0, se ejecuta este bloque y se imprime "Hace mucho frío"
    console.log('Hace mucho frío')

} else if (temperatura >= 0 && temperatura <= 15) {

    // 4. Si la primera condición no se cumple, pasa al siguiente bloque "else if"
    //    Acá verifica si la temperatura está entre 0 y 15
    //    Si esta condición es verdadera, imprime "Hace frío"
    console.log('Hace frío');

} else if (temperatura >= 16 && temperatura <= 30) {

    // 5. Si ninguna de las condiciones anteriores se cumple, evalúa esta tercera condición.
    //    Verifica si la temperatura está entre 16 y 30
    //    Si esta condición es verdadera, imprime "Hace un clima agradable"
    console.log('Hace un clima agradable')

} else {

    // 6. Si ninguna de las condiciones anteriores es verdadera, se ejecuta este bloque "else"
    //    Esto significa que la temperatura es mayor a 30, así que imprime "Hace calor"
    console.log('Hace calor')
} 





// EJERCICIO 3
//----------------------------------------------------------------------------------------------

// Escribe un bucle for que cuente desde 1 hasta 10 e imprima cada número en la consola.
// Pero si el número es múltiplo de 3, imprime "Fizz" en su lugar,
// y si es múltiplo de 5, imprime "Buzz".
// Si es múltiplo de ambos, imprime "FizzBuzz".


// 1. Inicio un bucle "for" que empezará con la variable "i" igual a 1
//    La condición "i <= 10" garantiza que el bucle se ejecute mientras "i" sea menor o igual a 10
//    Después de cada ciclo, "i" aumentará de 1 en 1 hasta llegar a 10 con "i++"

for(var i = 1; i <= 10; i++){

    // 2. Compruebo si "i" es múltiplo de 3 y de 5 a la vez
    //    Para esto uso el operador módulo "%" que devuelve el residuo de la división
    //    Si el residuo de "i % 3" y "i % 5" es igual a 0, entonces "i" es múltiplo de 3 y de 5.

    if(i % 3 === 0 && i % 5 === 0){

        // 3. Si "i" es múltiplo de ambos, imprimimo "FizzBuzz"
        console.log('FizzBuzz');

    } else if (i % 3 === 0){

        // 4. Si "i" no es múltiplo de 3 y 5, pero sí es múltiplo de 3, imprimo "Fizz"
        console.log('Fizz')

    } else if (i % 5 === 0){

        // 5. Si "i" no es múltiplo de 3, pero sí lo es de 5, imprimo "Buzz"
        console.log('Buzz')

    } else {

        // 6. Si "i" no es múltiplo ni de 3 ni de 5, imprimo el número "i"
        console.log(i)
    }
}



// EJERCICIO 4 (a partir de acá de tarea)
//---------------------------------------------------------------------------------------------

// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".


// 1. Creo un array llamado "numeros" con varios números enteros
var numeros = [3, 10, 7, 18, 20, 5, 8];

// 2. Uso un bucle "for" para recorrer todos los elementos del array "numeros"
//    La variable "i" comenzará en 0 (el primer índice del array) y recorrerá hasta el último índice (numeros.length - 1).
for (var i = 0; i < numeros.length; i++) {

     // 3. Dentro del bucle, tomo cada número del array con "numeros[i]" y verifico si es par o impar
     
     if (numeros[i] % 2 === 0) {

        // 4. Si el número es divisible entre 2 (es decir, su residuo al dividirlo por 2 es 0),
        //    entonces es un número par, y se imprime el mensaje correspondiente.
        console.log('El número ' + numeros[i] + ' es par');

    } else {

        // 5. Si el número no es par, entonces es impar (su residuo al dividirlo por 2 no es 0),
        //    por lo que imprimimo el mensaje para los números impares.
        console.log('El número ' + numeros[i] + ' es impar');
    }

}




// EJERCICIO 5
//---------------------------------------------------------------------------------------------

// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".



// 1. Creo un array llamado "calificaciones" con varios números representando calificaciones

var calificaciones = [15, 23, 32, 45, 56, 62, 70, 74, 78, 80, 96, 100]

// 2. Uso un bucle "for" para recorrer cada calificación en el array

for (var i = 0; i < calificaciones.length; i++) {

    // 3. Uso calificaciones[i] para evaluar cada elemento específico del array

    if (calificaciones[i] < 60) {

        // 4. Si la calificación es menor a 60, imprimo "Reprobado"
        console.log("Reprobado");

    } else if (calificaciones[i] >= 60 && calificaciones[i] <=80) {

        // 5. Si la calificación está entre 60 y 80, imprimo "Aprobado"
        console.log("Aprobado");

    } else {
    
        // 6. Si la calificación es mayor a 80, imprimo "Excelente"
        console.log("Excelente");
    }

}




// EJERCICIO 6
//-----------------------------------------------------------------------------------------------

// Clasificación de Productos por Precio:
// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// 1. Creo un array llamado "precios" 

var precios = [5, 12, 15, 19, 20, 28, 32, 46, 50, 58, 65, 80, 92, 100]

// 2. Uso un bucle "for" para recorrer cada precio en el array

for (var i = 0; i < precios.length; i++) {

    // 3. Condicional para verificar si el precio es menor a 20
    if (precios[i] < 20) {
        console.log("Producto económico")

    // 4. Condicional para verificar si el precio está entre 20 y 50
    } else if (precios[i] >= 20 && precios[i] <= 50) {
        console.log("Producto de precio moderado")

    // 5. Si no cumple ninguna de las condiciones anteriores, es mayor a 50
    } else {
        console.log("Producto de lujo")
    }

}