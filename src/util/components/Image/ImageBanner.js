import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import BannerSkeleton from "./BannerSkeleton";

const ImageBanner = (props) => {
  const DEFAULT_IMAGE_URL =
    "https://images.unsplash.com/photo-1656772133661-644caa299e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=1999&h=594";
  const CLIENT_ID = "wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
  const [loaded, setLoaded] = useState(true);
  const [banner, setBanner] = useState();
  const getBanner = async () => {
    if (props.topic !== undefined) {
      setLoaded(false);
      let url = `https://api.unsplash.com/topics/${props.topic}/photos?client_id=${CLIENT_ID}`;
      const res = await axios({
        method: "Get",
        url: url,
        params: { per_page: 1 },
      });
      setBanner(res.data[0]);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getBanner();
  }, [props.topic]);

  return (
    <div>
      {(banner && loaded) || props.topic === undefined ? (
        <div className="flex justify-center items-center">
          <img
            alt=""
            src={
              props.topic === undefined ? DEFAULT_IMAGE_URL : banner.urls.raw
            }
            className="w-full h-[429px] object-cover"
          ></img>
          <div className="absolute text-white flex flex-col w-[800px]">
            <Link className="text-5xl font-bold" to={"/"}>
              Unsplash
            </Link>
            <div className="flex flex-col my-4 text-lg">
              <span>The internet’s source of freely-usable images.</span>
              <span>Powered by creators everywhere.</span>
            </div>
            <SearchForm />
          </div>
        </div>
      ) : (
        <BannerSkeleton />
      )}
    </div>
  );
};
export default ImageBanner;
