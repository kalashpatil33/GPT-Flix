import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingmovies = () => {
    const dispatch = useDispatch();
    const trending = useSelector((store) => store.movies.trendingMovies);
    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day?', API_OPTIONS);
        const json = await data.json();
        // console.log(json);
        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        if (!trending)
            getTrendingMovies();
    }, []);
}

export default useTrendingmovies;