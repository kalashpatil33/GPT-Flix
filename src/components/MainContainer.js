import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
    if (movies === null)
        return;  //This is for the case when we are into the for first time when no movie is updated in the store or else that movies[0] will throw error. This is termed as Early return.
    const mainMovie = movies?.[0];
    // console.log(mainMovie);
    const { original_title, overview, id } = mainMovie;
    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieid={id} />
        </div>
    )
}

export default MainContainer