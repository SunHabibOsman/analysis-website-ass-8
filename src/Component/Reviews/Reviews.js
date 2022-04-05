import React from 'react';
import Reviewcard from './Reviewcard';

import useReview from './useReview';

const Reviews = () => {
  const [rev, setRev] = useReview()


  return (
    <div className='container'>

      <div className='row mt-5'>
        {
          rev.map(review => <Reviewcard
            reviews={review}
            key={review.id}
          >
          </Reviewcard>)
        }
      </div>
    </div>
  );
};

export default Reviews;