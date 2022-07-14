import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTopics, fetchTopics } from "../../../store/topics/topicSlice";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { NavItemActive } from "./NavItemActive";

const Nav = (props) => {
  const dispatch = useDispatch();
  const topics = useSelector(selectAllTopics);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  return (
    <div className="w-full flex items-center">
      <NavItemActive
        active={props.topicId !== undefined}
        link={"/"}
        title={"Home"}
      />
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100 "
        size={40}
        onClick={slideLeft}
      />
      <div
        id="slider"
        className="w-full h-full overflow-hidden scroll-smooth  whitespace-nowrap "
      >
        {topics &&
          topics.length > 0 &&
          topics.map((item, index) => {
            return (
              <NavItemActive
                key={index}
                active={props.topicId !== item.slug}
                link={`/topic/${item.slug}`}
                title={item.title}
              />
            );
          })}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100 "
        size={40}
        onClick={slideRight}
      />
    </div>
  );
};
export default Nav;
