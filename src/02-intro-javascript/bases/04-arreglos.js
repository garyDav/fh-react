// Arreglos en JS
// Un Arreglo no es más que una colección de información que se encuentra dentro de una misma variable.

// const arreglo = new Array(100) // No es recomendable usar new Array.
// arreglo.push(1) // Tenemos un arreglo de 100 posiciones vacías y 1 al final

// console.log( arreglo ) // [empty x 100, 1]

// const arreglo = []
// arreglo.push(1) // Recomendable no usar push directamente al arreglo, en su lugar usar el operador spread.
// arreglo.push(2)
// arreglo.push(2)
// arreglo.push(3)

const arreglo = [1, 2, 3, 4]

const arreglo2 = [ ...arreglo, 5 ] // Al usar "map" no modifico el arreglo2

const arreglo3 = arreglo2.map(function(numero) { // Callback: una función que se ejecutará dentro de este método "map"
  return numero * 2
})

console.log(arreglo)  // [1, 2, 3, 4]
console.log(arreglo2) // [1, 2, 3, 4, 5]
console.log(arreglo3) // [2, 4, 6, 8, 10]
