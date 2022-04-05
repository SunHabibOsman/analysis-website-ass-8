import React from 'react';
import CustomLink from '../../CustomLink';

const Header = () => {
  return (
    <div className='bg-primary py-1 justify-content-center align-items-center '>

      <ul className='d-flex justify-content-center align-items-center list-unstyled text-white'>
        <li className='p-3'><CustomLink to={'/'}>Home</CustomLink></li>
        <li className='p-3'><CustomLink to={'/reviews'}>Reviews</CustomLink></li>
        <li className='p-3'><CustomLink to={'/dashboard'}>Dashboard</CustomLink></li>
        <li className='p-3'><CustomLink to={'/blogs'}>Blog</CustomLink></li>
      </ul>

    </div>
  );
};

export default Header;