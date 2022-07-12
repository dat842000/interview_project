import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSkeleton from "../ImageSkeleton";
import useDataFetching from "../../util/components/UseDataFetch";

const HomeSection = () => {
  const CLIENT_ID = "wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
  // const MAX_NUMBER_OF_RANDOM_PHOTO = 30
  // const [pageNumber, setPageNumber] = useState(1);
  // const [hasMore] = useState(true);
  // const [photos, setPhotos] = useState([]);
  const {results, hasMore, pageNumber} = useDataFetching(
      `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`
    );

  // const getListPhoto = async () => {
  //   let url =
  //     "https://api.unsplash.com/photos/random?client_id=eW1tAaNr5ctrTmD7ZP86mibNpM6l9uLdUoqOOX3UffM";
  //   const res = await axios({
  //     method: "Get",
  //     url: url,
  //     params: { count: MAX_NUMBER_OF_RANDOM_PHOTO },
  //   });
  //   setPhotos([...photos, ...res.data]);
  //   setHasMore(res.data.length > 0);
  //   setPageNumber(pageNumber + 1);
  // };

  // useEffect(() => {
  //   getListPhoto();
    
  // }, []);

  return (
    <>
      <div>
        <InfiniteScroll
          dataLength={results.length} //This is important field to render the next data
          next={useDataFetching}
          hasMore={hasMore}
          loader={<ImageSkeleton quantity={6} />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className=" min-w-0  grid grid-cols-3 items-center">
            {results.map((item, index) => {
              return (
                <img
                  key={index}
                  src={item.urls.raw}
                  className="mx-auto p-4 w-96 h-96"
                ></img>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
export default HomeSection;