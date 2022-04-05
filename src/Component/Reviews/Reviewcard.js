import React from 'react';
import './Reviews.css'

const Reviewcard = ({ reviews }) => {
  const { id, first_name, last_name, image, review, feedback } = reviews;

  return (
    <div className='col-md-6 col'>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="rounded-start img-review" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-start">{first_name} {last_name}</h5>
              <p className="card-text text-start">{feedback}</p>
              <p className="card-text text-start"> Rating:{review}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;