import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from '../pure/Joke';
import Button from '../pure/Button';
import VoteButtons from '../pure/VoteButtons';

const ChuckNorrisJokes = () => {
  const [joke, setJoke] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    setJoke(response.data.value);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <Joke joke={joke} />
      <Button getJoke={getJoke} />
      <VoteButtons handleLike={handleLike} handleDislike={handleDislike} />
      <div>Likes: {likes}</div>
      <div>Dislikes: {dislikes}</div>
    </div>
  );
};

export default ChuckNorrisJokes;