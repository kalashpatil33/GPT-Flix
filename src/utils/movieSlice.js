import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'Movies',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trailer: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailer = action.payload;
        }
        , addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        }
        ,
        addtopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        }
    },

})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addtopRatedMovies, addUpcomingMovies, addTrendingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;