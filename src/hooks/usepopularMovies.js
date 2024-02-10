import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice"
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popular = useSelector((store) => store.movies.popularMovies);
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addPopularMovies(json.results));
    }
    useEffect(() => {
        if (!popular)
            getPopularMovies();
    }, []);
}

export default usePopularMovies;