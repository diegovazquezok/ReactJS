import PropTypes from 'prop-types';
import Contacto from '../../models/contacto';

function ComponenteB({ contacto, onToggle }) {
  const handleToggle = () => {
    onToggle(contacto);
  };

  return (
    <div>
      <h2>{contacto.nombre} {contacto.apellido}</h2>
      <p>{contacto.email}</p>
      {contacto.conectado
        ? <p>Contacto En Línea</p>
        : <p>Contacto No Disponible</p>
      }
      <button onClick={handleToggle}>Cambiar estado</button>
    </div>
  );
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default ComponenteB;