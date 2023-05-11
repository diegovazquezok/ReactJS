import { useState } from 'react';
import Contacto from '../../models/contacto';
import ComponenteB from './componenteB';

function ComponenteA() {
  const [contacto, setContacto] = useState(
    new Contacto('Diego', 'Vazquez', 'diego@example.com', true)
  );

  const handleToggle = () => {
    setContacto((prevContacto) => ({
      ...prevContacto,
      conectado: !prevContacto.conectado,
    }));
  };

  return (
    <div>
      <h1>Contacto</h1>
      <ComponenteB contacto={contacto} onToggle={handleToggle} />
    </div>
  );
}

export default ComponenteA;
