import React from 'react';
import CustomLink from '../../CustomLink';
import CustomerReview from './CustomerReview';
import './Home.css'
const Home = () => {
  return (
    <div className=''>
      <div className='d-flex justify-content-center align-items-center container mx-auto py-5 mt-5'>
        <div className='px-2 py-1'>
          <h1 className='text-start fw-bold text-primary'>Your Best PC take from Us in Very cheap Prices</h1>
          <p className='text-start'>we selling pc more then 4 years .we have a greatest design pc in the world you cant imagin how pc we have </p>
          <button className='btn btn-primary px-4 py-2 text-white rounded d-flex justify-content-start fw-bold'>Buy Now</button>
        </div>
        <div>
          <img className='img-fluid w-7' src="pc.png" alt="" />
        </div>
      </div>
      <div>
        <h1 className='fw-bold'>Customer Reviews(3)</h1>
        <div className='py-4'>
          <CustomerReview></CustomerReview>
          <button type="button" class="btn btn-primary text-white rounded button-home mt-2"><CustomLink to={'reviews'}>Show All Review</CustomLink></button>
        </div>
      </div>

    </div>
  );
};

export default Home;