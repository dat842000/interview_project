import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSkeleton from "../../util/components/ImageSkeleton";

export const Topic = () => {
  const { topicId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getListPhoto = async () => {
    var url =
      "https://api.unsplash.com/topics/" +
      topicId +
      "/photos?client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
    const res = await axios({
      method: "Get",
      url: url,
      params: { page: pageNumber },
    });
    
    setPhotos([...photos, ...res.data]);
    setHasMore(res.data.length > 0);
    
  };

  useEffect(() => {
    getListPhoto();
  }, [topicId]);

  return (
    <>
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
              <img key={index} src={item.urls.raw} className="mx-auto p-4 w-96 h-96"></img>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};
