import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "English",
        Panel: false,
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        },
        showPanel: (state, action) => {
            state.Panel = !state.Panel;
        }
    }
})

export const { changeLanguage, showPanel } = configSlice.actions;

export default configSlice.reducer;