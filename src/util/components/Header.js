import React from "react";
import { useDispatch } from "react-redux";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import { toggleDarkTheme } from "../../store/theme/themeSlice";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center mx-4 py-2">
      {/* <div className="w-[400px]">
        <SearchForm />
      </div> */}
      <Link className="text-3xl font-bold" to={"/"}>
        Unsplash
      </Link>
      {props.darkThemeEnabled ? (
        <BsFillMoonStarsFill
          onClick={() => {
            dispatch(toggleDarkTheme());
          }}
        />
      ) : (
        <FiSun
          onClick={() => {
            dispatch(toggleDarkTheme());
          }}
        />
      )}
    </div>
  );
};

export default Header;
