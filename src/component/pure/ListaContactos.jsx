import React, { useState } from 'react';
import Contacto from './Contacto';

function ListaContactos() {
  const [contactos, setContactos] = useState([
    { id: 1, nombre: 'Juan', conectado: true },
    { id: 2, nombre: 'Pedro', conectado: false },
    { id: 3, nombre: 'María', conectado: true },
  ]);

  const agregarContacto = (nombre) => {
    const nuevoContacto = {
      id: contactos.length + 1,
      nombre,
      conectado: false,
    };
    setContactos([...contactos, nuevoContacto]);
  };

  const eliminarContacto = (id) => {
    const nuevosContactos = contactos.filter((c) => c.id !== id);
    setContactos(nuevosContactos);
  };

  const cambiarEstadoContacto = (id) => {
    const nuevosContactos = contactos.map((c) => {
      if (c.id === id) {
        return { ...c, conectado: !c.conectado };
      }
      return c;
    });
    setContactos(nuevosContactos);
  };

  return (
    <div>
      <h1>Lista de contactos</h1>
      <ul>
        {contactos.map((contacto) => (
          <Contacto
            key={contacto.id}
            id={contacto.id}
            nombre={contacto.nombre}
            conectado={contacto.conectado}
            eliminarContacto={eliminarContacto}
            cambiarEstadoContacto={cambiarEstadoContacto}
          />
        ))}
      </ul>
      <button onClick={() => agregarContacto('Nuevo contacto')}>
        Agregar contacto
      </button>
    </div>
  );
}

export default ListaContactos;