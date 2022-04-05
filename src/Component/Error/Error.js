import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div>
      <img className='rounded mx-auto d-block img-fluid' src="img.png" alt="" />
      <button type='button' className='btn' ><Link to={'home'}>Back To Home</Link></button>
    </div>
  );
};

export default Error;