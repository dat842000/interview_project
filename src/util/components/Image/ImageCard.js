import React, { useState } from "react";

export const ImageCard = (props) => {
  const [hover, setHover] = useState();

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="relative">
      <img
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        alt=""
        src={props.item.urls.raw}
        className={`" mx-auto py-4 w-96 h-96  " ${
          hover ? "brightness-75" : null
        }`}
      ></img>
      {hover ? (
        <div
          className="px-auto mx-auto w-96"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="w-96 m-4 bottom-4 absolute flex items-center">
            <img
              alt=""
              className="w-10 h-10 rounded-full"
              src={props.item.user.profile_image.small}
            ></img>
            <div className="mx-4 text-white">
              <h3>{props.item.user.name}</h3>
              <h4>{props.item.user.location}</h4>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
