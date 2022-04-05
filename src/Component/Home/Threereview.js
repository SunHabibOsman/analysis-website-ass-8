import React from 'react';

const Threereview = ({ reviews }) => {
  const { id, first_name, last_name, image, review, feedback } = reviews;

  return (
    <div className='col-md-4 col '>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="rounded-start img-review" alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-end">{first_name} {last_name}</h5>
              <p className="card-text text-end">{feedback}</p>
              <p className="card-text text-end"> Rating:{review}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Threereview;