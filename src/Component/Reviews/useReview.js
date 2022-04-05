import React, { useEffect, useState } from 'react';


const useReview = () => {

  const [rev, setRev] = useState([])
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data => setRev(data))
  }, [])
  return [rev, setRev]

};

export default useReview;
