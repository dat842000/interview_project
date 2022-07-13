import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    darkThemeEnabled: true,
  },
  reducer: {
    toggleDarkTheme: (state) => {
      state.darkThemeEnabled = false;
      console.log(state.value)
    },
  },
});

export const { toggleDarkTheme } = themeSlice.actions

export default themeSlice.reducer;
