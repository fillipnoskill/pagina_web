import React, {Component} from "react";

export default function StudentCard(props) {
    return (
        <div className="card" style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', width: '250px'}}>
            <img
            src={props.foto}
            alt={`Foto de ${props.nombre}`}
            style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover'}}
            />
            <h3>{props.nombre}</h3>
            <p><strong>Programa:</strong> {props.programa}</p>
            <p><strong>Semestre:</strong> {props.semestre}</p>
            <p><strong>Estado:</strong> {props.estadoAcademico}</p>
        </div>
    );
}

