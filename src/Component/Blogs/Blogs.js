import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='container'>
      <div className='d-flex '>
        <div>
          <h1 className='fw-bold text-start mt-2 px-3'>What is Context Api</h1>
          <h4 className='text-start mt-2 px-3'>The React Context API was been around as an experimental feature , solving one major problem React problem — prop drilling. So its make easy to get prop.</h4>
        </div>
        <img className='image-context' src="context.png" alt="" />
      </div>
      <div className='d-flex'>
        <div><h1 className='fw-bold text-start mt-2 px-3'>What is Semantic Tag</h1>
          <h4 className='text-start mt-2 px-3'>Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.</h4></div>
        <img className='image-context' src="semantic.jpg" alt="" />
      </div>
    </div>
  );
};

export default Blogs;