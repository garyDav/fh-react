// Objetos literales
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 34235,
    lat: 14.32342,
    lng: 34.45345,
  }
}

// console.table(persona)
const persona2 = persona // Asignación de referencia NO CLONACIÓN.

persona2.nombre = 'Petter'

console.log( persona ) // {nombre: 'Petter'...}
console.log( persona2 ) // {nombre: 'Petter'...}

const persona3 = { ...persona } // Clonamos el objeto con el operador spread
persona3.nombre = 'Juan'

console.log( persona ) // {nombre: 'Petter'...}
console.log( persona3 ) // {nombre: 'Juan'...}

