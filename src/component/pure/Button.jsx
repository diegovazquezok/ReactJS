import React from 'react';
import Button from '@material-ui/core/Button';

const GenerateButton = ({ getJoke }) => {
  return (
    <Button variant="contained" color="primary" onClick={getJoke}>
      Generate Joke
    </Button>
  );
};

export default GenerateButton;