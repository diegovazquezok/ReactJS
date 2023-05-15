import React from 'react';
import Button from '@material-ui/core/Button';

const VoteButtons = ({ handleLike, handleDislike }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLike}>
        Like
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDislike}>
        Dislike
      </Button>
    </div>
  );
};

export default VoteButtons;