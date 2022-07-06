import React from "react";

const Nav = ({ listTopics }) => {
  return (
    <div className="flex justify-between items-center px-4 py-3 bg-slate-300 overflow-x-auto w-100wv overflow-y-hidden">
      <a className="min-w-200 mx-4" href={`/`}>
              Home
            </a>
      {listTopics &&
        listTopics.length > 0 &&
        listTopics.map((item, index) => {
          return (
            <a key={index} className="min-w-200 mx-8" href={`/topic/${item.slug}`}>
              {item.title}
            </a>
          );
        })}
    </div>
  );
};
export default Nav;
