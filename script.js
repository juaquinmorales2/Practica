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







// FUNCION 4

// Promedio de notas del curso "Programación Web"
const cursoProg = cursos.find(c => c.nombre === "Programación Web");
const promedioProg = cursoProg.estudiantes.reduce((acumulador, estud) => acumulador + estud.nota, 0) / cursoProg.estudiantes.length;
console.log("Promedio del Curso Programación Web:", promedioProg.toFixed(2));

// Promedio por curso
cursos.forEach(curso => {
  const promedio = curso.estudiantes.reduce((sum, estud) => sum + estud.nota, 0) / curso.estudiantes.length;
  console.log(`${curso.nombre}: Promedio = ${promedio.toFixed(2)}`);
});