import React from "react";
import { Link } from "react-router-dom";

export const NavItemActive = (props) => {
  return (
    <Link
      className={`"w-[180px] inline-block p-4 cursor-pointer hover:scale-105 ease-in-out duration-300 text-center my-auto "${
        props.active
          ? null
          : " text-lime-500 border-b-2 border-lime-500 items-center "
      }`}
      to={props.link}
    >
      {props.title}
    </Link>
  );
};
