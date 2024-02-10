import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from './languageConstants'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMoviesResult, hideGPTSuggestions } from '../utils/GPTSlice';
// import { changeLanguage } from '../utils/configSlice'
const GPTSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json();
        console.log(json.results);
        return json.results;
    }
    // const gptsuggestions = useSelector((store) => store.GPT.showGPTSuggestions);
    const handleGPTSearchClick = async () => {
        // console.log(searchText.current.value);
        // Make an API call to get the Movie Results
        dispatch(hideGPTSuggestions());
        const gptQuery = "Act as A Movie recommendation system and suggest some movies for the query" + searchText.current.value + "Only give me names of 5 movies comma separated like the example result ahead: Example Result : Gadar,Sholay,Don,Raone, Chennai Express";
        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        // console.log(gptResults.choices);
        //So in getMovies we have got a array of all movies which match the search result.
        const getMovies = gptResults.choices[0].message.content.split(",");
        // Now for each movie we have to search in TMDB API..That we have done below
        const promiseArray = getMovies.map((movie) => searchMovieTMDB(movie));
        //But this searchMovieTMDB will return a promise na hence promiseArray is a array of 5 promises which are yet to be resolved immediately thodi na result bhetel aplyala..

        const TMDBResults = await Promise.all(promiseArray);
        // Promise.all mule kay hoil sagle api call resolve hot nhi topryant results madhe valuech update honar nhi asa..
        dispatch(addGPTMoviesResult({ movieName: getMovies, movieResults: TMDBResults }));
        // console.log(TMDBResults)
    }
    const languageSelected = useSelector((store) => store.config.lang)
    return (
        <div className='pt-[30%] md:pt-[10%] flex justify-center'>
            <form
                className='w-full md:w-1/2 bg-black grid grid-cols-12'
                onSubmit={(e) => e.preventDefault()}>
                <input type='text'
                    ref={searchText}
                    className='p-4 m-4 col-span-10 rounded-lg'
                    placeholder={lang[languageSelected].GPTSearchPlaceHolder}></input>
                <button className='m-4  col-span-2 bg-red-500 text-white rounded-lg'
                    onClick={handleGPTSearchClick}>
                    {lang[languageSelected].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar