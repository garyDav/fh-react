// Template Strings
const nombre = 'Gary'
const apellido = 'Guzmán'

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `
  ${ nombre }
  ${ apellido }
  ${ 1 + 1 }
`

console.log(nombreCompleto)

function getSaludo(nombre='David') {
  return 'Hola ' + nombre
}

console.log(`Este es un texto: ${ getSaludo( nombre ) }`)
