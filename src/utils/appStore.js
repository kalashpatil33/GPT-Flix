import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/movieSlice";
import GPTReducer from "../utils/GPTSlice";
import configReducer from "../utils/configSlice"
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            GPT: GPTReducer,
            config: configReducer,
        }
    }
);
export default appStore;