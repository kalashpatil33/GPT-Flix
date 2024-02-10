import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        gptmovies: null,
        movieNames: null,
        showGPTSuggestions: false,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        hideGPTSuggestions: (state) => {
            state.showGPTSuggestions = !state.showGPTSuggestions;
        },
        addGPTMoviesResult: (state, action) => {
            const { movieName, movieResults } = action.payload;
            state.gptmovies = movieResults;
            state.movieNames = movieName;
        },
    },
});
export const {
    toggleGPTSearchView,
    hideGPTSuggestions,
    addGPTMoviesResult,
} = GPTSlice.actions;

export default GPTSlice.reducer;
