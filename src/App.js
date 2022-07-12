import { useEffect, useState } from "react";
import Nav from "./app/Navbar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Topic } from "./components/topicSection/topic";
import Search from "./components/searchSection";
import SearchForm from "./components/searchForm";
import HomeSection from "./components/homeSection";

const App = () => {
  

  return (
    <>
      <SearchForm />
      <Nav />
      <HomeSection />
      {/* <Routes>
        <Route exact path="/" element={<HomeSection />} />
        <Route exact path="/photos/:photoName" element={<Search />} />
        <Route exact path="/topic/:topicId" element={<Topic />} />
      </Routes> */}
    </>
  );
};

export default App;
