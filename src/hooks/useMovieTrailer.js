import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerfetching = useSelector((store) => store.movies.trailer);
    const getMovieVideo = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId.movieid + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        //a movie can have more than 1 trailer
        const trailers = json?.results?.filter((video) => (video.type === 'Trailer'));
        // if no trailer then give any random video..
        const trailer = trailers?.length ? trailers[0] : json?.results?.[0];
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        if (!trailerfetching)
            getMovieVideo();
    }, [])
}
export default useMovieTrailer