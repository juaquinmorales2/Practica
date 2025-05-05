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

























































//ubicacion de Luis
console.log(cursos[3].estudiantes[0].nombre)

//Ubicacion de la nota de Luis
console.log(cursos[3].estudiantes[0].nota)
console.log(cursos[0].estudiantes.length)

function buscarCursosYNotas(nombreEstudiante) {
  const resultados = [];

  cursos.forEach(curso => {
    const estudiante = curso.estudiantes.find(e => e.nombre === nombreEstudiante);
    if (estudiante) {
      resultados.push({ curso: curso.nombre, nota: estudiante.nota });
    }
  });

  return resultados;
}

// Ejemplo de uso para Luis:
const resultadosLuis = buscarCursosYNotas("Luis");
console.log("Luis está inscrito en:");
resultadosLuis.forEach(r => {
  console.log(`- ${r.curso} con nota ${r.nota}`);
});





//ubicacion de la nota de Ana (el problema es que hay tres estudiantes Ana)

// Ejemplo de uso para Ana:
const resultadosAna = buscarCursosYNotas("Ana");
console.log("Ana está inscrita en:");
resultadosAna.forEach(r => {
  console.log(`- ${r.curso} con nota ${r.nota}`);
});










