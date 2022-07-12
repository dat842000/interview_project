import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTopics, fetchTopics } from "../features/topics/topicSlice";

const Nav = () => {
  const dispatch = useDispatch()
  const topics = useSelector(selectAllTopics)
  
  useEffect(()=> {
    dispatch(fetchTopics())
  },[dispatch])

  // const [listTopics, setListTopics] = useState([]);

  // useEffect(() => {
  //   getListTopic();
  //   // console.log(listTopics);
  // }, []);

  // const getListTopic = async () => {
  //   const res = await axios({
  //     method: "GET",
  //     url: "https://api.unsplash.com/topics?client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg",
  //     params: { page: 1, per_page: 21 },
  //   });
  //   setListTopics(res.data);
  // };

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-slate-300 overflow-x-auto w-100wv overflow-y-hidden">
      <Link className="min-w-200 mx-4" to={`/`}>
        Home
      </Link>
      {topics &&
        topics.length > 0 &&
        topics.map((item, index) => {
          return (
            <Link className="min-w-200 mx-8" to={`/topic/${item.slug}`}>
              {item.title}
            </Link>
          );
        })}
    </div>
  );
};
export default Nav;
