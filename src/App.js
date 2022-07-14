import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TopicSection } from "./page/topicSection/topic";
import HomeSection from "./page/homeSection/home";
import SearchSection from "./page/searchSection/search";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "./themeConfig";
import Header from "./util/components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const darkThemeEnabled = useSelector((state) => state.theme.darkThemeEnabled);

  const Container = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  return (
    <>
      <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
        <Container>
          <BrowserRouter>
            <Header darkThemeEnabled={darkThemeEnabled}/>
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
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
