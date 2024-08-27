import React from 'react';
import { useParams } from 'react-router-dom';

const Track = () => {
    const {id} = useParams()
  return (
    <div>Track {id}</div>
  );
}

export default Track;