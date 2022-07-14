import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkThemeEnabled: false
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkTheme: (state) => {
      state.darkThemeEnabled = !state.darkThemeEnabled;
    //   console.log(state.value)
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions

export default themeSlice.reducer;
