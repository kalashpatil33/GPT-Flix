import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingmovies = () => {
    const dispatch = useDispatch();

    const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(() => {
        if (!nowPlaying)          //if we do not have nowPlaying movies then only make API Call
            getNowPlayingMovies();
    }, []);
}

export default useNowPlayingmovies;