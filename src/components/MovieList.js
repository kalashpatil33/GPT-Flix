import { useState } from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='p-2'>
      <h1 className='text-lg md:text-2xl py-2 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll bar' style={{ overflowX: 'scroll', WebkitOverflowScrolling: 'touch' }}>
        <div className='flex' style={{ marginRight: '-16px' }}>
          {movies?.map((movie, index) => (
            <div
              key={index}
              className={`m-2 ${index === hoveredIndex ? 'hovered-card' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <MovieCard
                posterpath={movie.poster_path}
                title={movie.original_title}
                overview={movie.overview}
                rating={movie.vote_average}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;