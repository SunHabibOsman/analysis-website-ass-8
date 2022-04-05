import React from 'react';
import useReview from '../Reviews/useReview';
import Threereview from './Threereview';

const CustomerReview = () => {
  const [rev, setRev] = useReview()
  const madeSlice = rev.slice(0, 3)
  return (
    <div className='container'>
      <div className='row'>

        {
          madeSlice.map(revie => <Threereview
            reviews={revie}
            key={revie.id}
          ></Threereview>
          )
        }
      </div>
    </div>
  );
};

export default CustomerReview;