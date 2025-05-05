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

function luis() {
    for (let i = 0; i < cursos.length; i++) {
        for (let j = 0; j < cursos[0].estudiantes.length; j++) {
            let Luis = cursos.find((curso) => cursos[i].estudiantes[j].name === Luis)
            return console.log(Luis)
        }


    }
}

function luis2() {
    for (let i = 0; i < cursos.length; i++) {
        for (let j = 0; j < cursos[0].estudiantes.length; j++) {
            let Luis = cursos[i].estudiantes[j].nombre.filter((curso) => curso[i].estudiantes[j].nombre === "Luis")
            return cconsole.log(Luis)
        }


    }
}


// console.log(mayoresedad);

//     if (cursos)
//     cursos.forEach((curso) => curso.estudiantes.includes("Luis"))
//     console.log(curso)
// }
// let Luis = cursos.find((curso) => curso.estudiantes.includes("Luis"))
// console.log(cursos[3].profesor)