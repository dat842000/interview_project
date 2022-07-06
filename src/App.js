import { useEffect, useState } from "react";
import Nav from "./components/nav";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Topic } from "./components/topicSection/topic";
import Search from "./components/searchSection";
import SearchForm from "./components/searchForm";
import HomeSection from "./components/homeSection";

const App = () => {
  const [listTopics, setListTopics] = useState([]);

  useEffect(() => {
    getListTopic();
    // console.log(listTopics);
  }, []);

  const getListTopic = async () => {
    const res = await axios({
      method: "GET",
      url: "https://api.unsplash.com/topics?client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg",
      params: { page: 1, per_page : 21},
    });
    setListTopics(res.data);

  };

  return (
    <div>
      {/* <Header /> */}
      <Nav listTopics={listTopics}/>
      <BrowserRouter>
        <SearchForm />
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/photos/:photoName" element={<Search/>} />
          <Route path="/topic/:topicId" element={<Topic />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
