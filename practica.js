


/* Arreglo de objetos */
let estudiantes = [
    {
        nombre: 'Federico',
        apellido: 'Laurnagaray',
        edad: '16',
      nota:'8',
    },
     {
        nombre: 'Agustin',
        apellido: 'Kramer',
        edad: '17',
        nota:'3',
    },
     {
        nombre: 'Bauti',
        apellido: 'Bader',
        edad: '17',
        nota: '5',
    },
    {
        nombre: 'santi',
        apellido: 'cenixo',
        edad: '16',
        nota: '7',
    },  {
        nombre: 'clara',
        apellido: 'gauna',
        edad: '16',
        nota: '10',
    },
]
 console.log(estudiantes)


for (let indice = 0; indice < estudiantes.length; indice++) {
    //Mostrar todos los elementos del arreglo
    console.log(estudiantes[indice].apellido + ' ' + estudiantes[indice].nombre + ' ' +  estudiantes[indice].nota)
}
