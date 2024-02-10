import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import { hideGPTSuggestions } from '../utils/GPTSlice';

const GPTMovieSuggestions = () => {
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(hideGPTSuggestions());
  };
  const gpt = useSelector((store) => store.GPT);
  const { gptmovies, movieNames } = gpt;
  const gptsuggestions = useSelector((store) => store.GPT.showGPTSuggestions);
  if (!movieNames) return null; // We will show shimmer here afterwards.
  console.log(gptsuggestions)
  return (
    ( gptsuggestions && <div className='p-4 m-4 bg-black text-white opacity-90'>
      <div>
        <div className='flex justify-end'>
          <button onClick={handleSearchClick}>❌</button>
        </div>
        {
          movieNames.map((movieName, index) => (
            <MovieList key={movieName} title={movieName} movies={gptmovies[index]} />
          ))}
      </div>
    </div>)

  );
};

export default GPTMovieSuggestions;
