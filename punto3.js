import { useState } from "react";

export default function GestorTareas() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return; 

    const nuevaTarea = {
      id: Date.now(),
      titulo: titulo,
      descripcion: descripcion,
      completada: false
    };

    setTareas([...tareas, nuevaTarea]);
    setTitulo("");
    setDescripcion("");
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const tareasPendientes = tareas.filter(t => !t.completada).length;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #444', borderRadius: '8px', color: 'white' }}>
      <h2 style={{ textAlign: 'center' }}>Gestor de Tareas</h2>
      
      <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#ccc' }}>
        Tareas pendientes: {tareasPendientes}
      </p>

      <form onSubmit={agregarTarea} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: 'white' }}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #555', backgroundColor: '#222', color: 'white' }}
        />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#555', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Agregar Tarea
        </button>
      </form>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {tareas.map(tarea => (
          <div key={tarea.id} style={{ 
            border: '1px solid #444', 
            padding: '15px', 
            borderRadius: '8px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            backgroundColor: tarea.completada ? '#1a1a1a' : 'transparent',
            opacity: tarea.completada ? 0.6 : 1
          }}>

            <div style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{tarea.titulo}</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#aaa' }}>{tarea.descripcion}</p>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={() => toggleCompletada(tarea.id)} style={{ padding: '8px 12px', backgroundColor: '#555', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                {tarea.completada ? 'Deshacer' : 'Completar'}
              </button>
              <button onClick={() => eliminarTarea(tarea.id)} style={{ padding: '8px 12px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}