import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSkeleton from "../../util/components/ImageSkeleton";

const HomeSection = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [photos, setPhotos] = useState([]);
  const MAX_NUMBER_OF_RANDOM_PHOTO = 30

  const getListPhoto = async () => {
    var url =
      "https://api.unsplash.com/photos/random?client_id=eW1tAaNr5ctrTmD7ZP86mibNpM6l9uLdUoqOOX3UffM";
    const res = await axios({
      method: "Get",
      url: url,
      params: { count: MAX_NUMBER_OF_RANDOM_PHOTO },
    });
    console.log(res.data)
    setPhotos([...photos, ...res.data]);
    setHasMore(res.data.length > 0);
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    getListPhoto();
    
  }, []);

  return (
    <>
      <div>
        <InfiniteScroll
          dataLength={photos.length} //This is important field to render the next data
          next={getListPhoto}
          hasMore={hasMore}
          loader={<ImageSkeleton quantity={6} />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className=" min-w-0  grid grid-cols-3 items-center">
            {photos.map((item, index) => {
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