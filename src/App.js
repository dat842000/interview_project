import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TopicSection } from "./page/topicSection/topic";
import SearchForm from "./util/components/SearchForm";
import HomeSection from "./page/homeSection/home";
import SearchSection from "./page/searchSection/search";
import { ThemeProvider } from "@emotion/react";
import theme from "styled-theming";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkTheme } from "./store/theme/themeSlice";

const App = () => {
  const darkThemeEnabled = useSelector((state) => state.theme.darkThemeEnabled);
  const dispatch = useDispatch();
  console.log(darkThemeEnabled)
  

  return (
    <>
      {/* <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}> */}
        <BrowserRouter>
          <div className="flex justify-between items-center mx-4">
            <div className="w-[400px]">
              <SearchForm />
            </div>
            {/* <p>
            <input
              type="checkbox"
              checked={darkThemeEnabled}
              onChange={() => dispatch(toggleDarkTheme())}
            ></input>{" "}
            Use Dark Theme
          </p> */}
          </div>
          <Routes>
            <Route exact path="/" element={<HomeSection />} />
            <Route
              exact
              path="/photos/:photoName"
              element={<SearchSection />}
            />
            <Route exact path="/topic/:topicId" element={<TopicSection />} />
          </Routes>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </>
  );
};

export const backgroundColor = theme("theme", {
  light: "#eff2f9",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export default App;
