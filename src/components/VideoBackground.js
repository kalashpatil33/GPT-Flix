import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';
const VideoBackground = (movieId) => {
    useMovieTrailer(movieId);
    const trailerid = useSelector((store) => store?.movies?.trailer);
    //fetch trailer
    //so  basically apan ek 572802 id wali movie ghetliy ani tichya related sagle videos fetch kele ata hyatun trailer vala kadava 
    return (
        <div>
            <iframe
                className='w-screen aspect-video'
                src={"https://www.youtube.com/embed/" + trailerid?.key + "?autoplay=1&mute=1"}
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}
export default VideoBackground