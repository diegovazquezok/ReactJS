import React, { useState } from 'react';

function Caja() {
  const [color, setColor] = useState('black');
  const [intervalo, setIntervalo] = useState(null);

  const generarColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  const iniciarCambioColor = () => {
    if (!intervalo) {
      const id = setInterval(() => {
        generarColor();
      }, 500);
      setIntervalo(id);
    }
  };

  const detenerCambioColor = () => {
    if (intervalo) {
      clearInterval(intervalo);
      setIntervalo(null);
    }
  };

  const handleClick = () => {
    detenerCambioColor();
  };

  return (
    <div
      style={{ backgroundColor: color, width: '255px', height: '255px' }}
      onMouseEnter={iniciarCambioColor}
      onMouseLeave={detenerCambioColor}
      onDoubleClick={handleClick}
    ></div>
  );
}

export default Caja;