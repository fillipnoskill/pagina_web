import React from "react";
import StudentCard from "./react";

export default function App() {
    const ListaEstudiantes = [
        {
            id: 1,
            nombre: "Guillermo Arrieta",
            programa: "Ingenieria de sistemas",
            semestre: 3,
            foto: "https://tse1.mm.bing.net/th/id/OIP.NpFiOXnSmRXwLnkwZhR8JQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            estadoAcademico: "Matriculado"
        },
        {
            id: 2,
            nombre: "Lucas Blanco",
            programa: "Lenguas modernas",
            semestre: 6,
            foto: "https://tse1.mm.bing.net/th/id/OIP.tb_WpaBkSHj7Sask82PcowHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            estadoAcademico: "Matriculado"
        },
        {
            id: 3,
            nombre: "Valentina Arrieta",
            programa: "Arquitectura",
            semestre: 9,
            foto: "https://tse1.mm.bing.net/th/id/OIP.A9ncnlbi76HXBk8gz-te-wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            estadoAcademico: "Egresada"
        },
        {
            id: 4,
            nombre: "Sebastian Pacheco",
            programa: "Derecho",
            semestre: 4,
            foto: "https://tse1.mm.bing.net/th/id/OIP.A9ncnlbi76HXBk8gz-te-wHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            estadoAcademico: "Matriculado"
        },
        {
            id: 5,
            nombre: "Isiar Castillo",
            programa: "Lic. infantil",
            semestre: 5,
            foto: "https://www.uniatlantico.edu.co/wp-content/uploads/2023/10/universidad-del-atlantico.jpeg",
            estadoAcademico: "Matriculada"
        }
    ];

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px'}}>
            <h1>Directorio Universitario</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {ListaEstudiantes.map((estudiante) => (
                    <StudentCard
                    key={estudiante.id}
                    nombre={estudiante.nombre}
                    programa={estudiante.programa}
                    semestre={estudiante.semestre}
                    foto={estudiante.foto}
                    estadoAcademico={estudiante.estadoAcademico}
                    />
                    ))}
            </div>
        </div>
    );
}