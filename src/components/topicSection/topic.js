import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSkeleton from "../ImageSkeleton";
import useDataFetching from "../../util/components/UseDataFetch";
import axios from "axios";

export const Topic = () => {
  const CLIENT_ID = "wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
  const { topicId } = useParams();
  // const {results, hasMore, pageNumber} = useDataFetching(
  //   `https://api.unsplash.com/topics/${topicId}/photos?client_id=${CLIENT_ID}`
  // );
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getListPhoto = async () => {
    let url = `https://api.unsplash.com/topics/${topicId}/photos?client_id=${CLIENT_ID}`
      ;
    const res = await axios({
      method: "Get",
      url: url,
      params: { page: pageNumber },
    });

    setPhotos([...photos, ...res.data]);
    setHasMore(res.data.length > 0);
    setPageNumber(pageNumber + 1)
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
              <img src={item.urls.raw} className="mx-auto p-4 w-96 h-96"></img>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
};
