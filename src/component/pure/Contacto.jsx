import React from 'react';

function Contacto({ id, nombre, conectado, eliminarContacto, cambiarEstadoContacto }) {
  const handleEliminarClick = () => {
    eliminarContacto(id);
  };

  const handleEstadoClick = () => {
    cambiarEstadoContacto(id);
  };

  return (
    <li>
      <img
        src={conectado ? 'online.png' : 'offline.png'}
        alt={conectado ? 'En línea' : 'Fuera de línea'}
      />
      {nombre}
      <button onClick={handleEliminarClick}>Eliminar</button>
      <button onClick={handleEstadoClick}>
        {conectado ? 'Desconectar' : 'Conectar'}
      </button>
    </li>
  );
}

export default Contacto;