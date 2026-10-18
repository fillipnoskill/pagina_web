import { useState } from "react";

export default function contadorProductos() {
    const[cantidad, setCantidad] = useState(0);

    const sumar = () => {
        setCantidad(contador+1);
    };

    const restar = () => {
        if (contador > 0)
        setCantidad(contador-1);
    };

    const reiniciar = () => {
        setCantidad(0);
    };

    const renderizarMensaje = () => {
        if (cantidad === 0) {
        return "No hay productos seleccionados"; 
        } else if (cantidad === 1) {
        return "Has seleccionado un producto"; 
        } else {
        return "Has seleccionado varios productos"; 
        }
    };

    return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Contador de Productos</h2>
      
      <div style={{ fontSize: '48px', fontWeight: 'bold', margin: '20px 0' }}>
        {cantidad}
      </div>

      <p style={{ color: '#555', fontStyle: 'italic', height: '24px' }}>
        {renderizarMensaje()}
      </p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={restar} style={{ padding: '10px 15px', fontSize: '16px' }}>
          - RESTAR
        </button>
        <button onClick={sumar} style={{ padding: '10px 15px', fontSize: '16px' }}>
          + SUMAR
        </button>
      </div>
      
      <button onClick={reiniciar} style={{ marginTop: '15px', padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Reiniciar
      </button>
    </div>
  );
}