const cursos = [
    {
      nombre: "Programación Web",
      profesor: "Kevin",
      estudiantes: [
        { nombre: "Ana", nota: 8 },
        { nombre: "Luis", nota: 6 },
        { nombre: "Sofía", nota: 9 },
        { nombre: "Carlos", nota: 7 }
      ],
    },
    {
      nombre: "Bases de Datos",
      profesor: "Diego",
      estudiantes: [
        { nombre: "Pedro", nota: 5 },
        { nombre: "Sofía", nota: 7 },
        { nombre: "Luis", nota: 4 },
        { nombre: "Ana", nota: 6 }
      ],
    },
    {
      nombre: "Diseño UX/UI",
      profesor: "Lucía",
      estudiantes: [
        { nombre: "Ana", nota: 10 },
        { nombre: "Pedro", nota: 6 },
        { nombre: "Valentina", nota: 9 },
        { nombre: "Carlos", nota: 10 }
      ],
    },
    {
      nombre: "Lógica de Programación",
      profesor: "Martín",
      estudiantes: [
        { nombre: "Luis", nota: 5 },
        { nombre: "Cristina", nota: 8 },
        { nombre: "Ricardo", nota: 9 },
        { nombre: "Sofía", nota: 6 }
      ],
    },
    {
      nombre: "JavaScript Intermedio",
      profesor: "Mariana",
      estudiantes: [
        { nombre: "Kevin", nota: 7 },
        { nombre: "Valentina", nota: 8 },
        { nombre: "Pedro", nota: 9 },
        { nombre: "Ana", nota: 10 }
      ],
    }
  ];
//   FUNCION 1: Listar
//   Mostrá todos los nombres de los cursos con su profesor.
  
//   Mostrá todos los nombres de los estudiantes (sin repetir).


cursos.forEach(curso => {
    console.log(`
      ${curso.profesor}:  ${curso.nombre}
      `)
  

});


const estudiantesUnicos = new Set();

for (let i = 0; i < cursos.length; i++) {
  for (let j = 0; j < cursos[i].estudiantes.length; j++) {
    estudiantesUnicos.add(cursos[i].estudiantes[j].nombre);
  }
}

console.log("Estudiantes:");
estudiantesUnicos.forEach(nombre => {
  console.log(nombre);
});
