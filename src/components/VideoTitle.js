import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
            <h1 className='text-2xl md:text-5xl w-1/3 font-bold'>{title}</h1>
            <p className='hidden md:inline-block py-5  text-lg w-1/3'>{overview}</p>
            <div className='flex'>
                <button className='w-36 m-2 h-10 px-4 text-lg font-bold bg-gray-300 rounded-md text-black hover:opacity-50'> ▶️ Play</button>
                <button className='hidden md:inline-block  w-40 m-2 h-10 px-4 text-lg font-bold bg-gray-300 rounded-md text-black'>ℹ️ More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle