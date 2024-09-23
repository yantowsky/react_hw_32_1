import { createSlice } from "@reduxjs/toolkit";

const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState: { dark: window.matchMedia("(prefers-color-scheme: dark)").matches || false },
    reducers: {
        switchMode: (state) => {
            state.dark = !state.dark
        }
    }
});

export const { switchMode } = darkThemeSlice.actions;
export default darkThemeSlice.reducer;