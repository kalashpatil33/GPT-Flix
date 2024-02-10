import { useDispatch, useSelector } from "react-redux";
import { addtopRatedMovies } from "../utils/movieSlice"
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const rated = useSelector((store) => store.movies.topRatedMovies);
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addtopRatedMovies(json.results));
    }
    useEffect(() => {
        if (!rated)
            getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;