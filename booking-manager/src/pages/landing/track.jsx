import React from 'react';
import { useParams } from 'react-router-dom';

const Track = () => {
    const {number} = useParams()
  return (
    <div>Track {number}</div>
  );
}

export default Track;