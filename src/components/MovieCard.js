import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterpath, title, overview, rating }) => {
    const [isHovered, setIsHovered] = useState(false);
    if (posterpath === null) return null;
    // Function to format the rating to 1 decimal place and add a star
    const formatRating = (rating) => {
        return rating.toFixed(1) + ' ⭐';
    };
    return (
        <div
            className={`relative w-28 md:w-72 transition-all duration-300 ${isHovered ? 'hovered-card' : ''
                } border-2 border-gray-800 overflow-hidden`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Movie Poster */}
            <img
                alt='Movie Poster'
                src={IMG_CDN_URL + posterpath}
                className='w-full h-auto transform-gpu hover:opacity-75'
            />

            {/* Movie Details on Hover */}
            <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-75 opacity-0 ${isHovered ? 'hover:opacity-100' : ''
                }`}>
                {/* Movie Overview */}
                <p className='text-white mb-2 text-center text-xs md:text-sm'>{overview}</p>

                {/* Movie Title */}
                <h2 className='text-white text-base md:text-lg font-bold mb-2'>{title}</h2>

                {/* Movie Rating */}
                <p className='text-white text-xs md:text-2xl'>{`Rating: ${formatRating(rating)}`}</p>
            </div>
        </div>
    );
};

export default MovieCard;
