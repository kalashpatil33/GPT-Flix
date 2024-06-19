import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestions from './GPTMovieSuggestions';
import { BG_IMG_URL } from '../utils/constants';


const GPTSearch = () => {
 
  // console.log(gptsuggestions);
  
  return (
    <>
      <div
        className='fixed -z-10 h-screen w-screen'>
        <img 
          className="h-full w-full object-cover cursor-pointer"
          src={BG_IMG_URL}
          alt='Background'
        />
      </div>
      <div className='relative'>
        <GPTSearchBar />
        
          <GPTMovieSuggestions />
        
      </div>
    </>
  );
};

export default GPTSearch;
