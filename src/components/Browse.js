
import { useSelector } from 'react-redux';
import useNowPlayingmovies from '../hooks/useNowPlayingmovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingmovies from '../hooks/useTrendingMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usepopularMovies';
import GPTSearch from './GPTSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    const showGPTSearch = useSelector((store) => store.GPT.showGPTSearch);
    useNowPlayingmovies(); //updates the redux store with now playing movies.
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTrendingmovies();

    return (
        <div>
            <Header />
            {
                showGPTSearch ?
                    (<GPTSearch />) :
                    (<>
                        <MainContainer />
                        <SecondaryContainer />
                    </>)
            }

            {/* 
             MainContainer 
                -VideoBackground
                -Videotitle
             SecondaryContainer
                -MovieList*n
                  -cards*n
                  -
            */}
        </div>
    )
}

export default Browse