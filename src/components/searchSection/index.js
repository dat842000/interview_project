import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSkeleton from "../../util/components/ImageSkeleton";

const Search = () => {
  const { photoName } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [preSearchTerm, setPreSearchTerm] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [photos, setPhotos] = useState([]);

  const getListPhoto = async () => {
    let newPage = pageNumber
    if(preSearchTerm != photoName){
      newPage = 1
      setPageNumber(newPage)
    }
    var url =
      "https://api.unsplash.com/search/photos?query=" +
      photoName +
      "&client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
    const res = await axios({
      method: "Get",
      url: url,
      params: { page: newPage },
    });
    if (preSearchTerm === photoName) {
      setPhotos([...photos, ...res.data.results]);
    } else {
      setPhotos(res.data.results);
    }
    
    setPreSearchTerm(photoName);
    setHasMore(res.data.results.length > 0);
    
  };

  useEffect(() => {
    getListPhoto();
    
  }, [photoName, pageNumber]);

  return (
    <>
      <div>
        <InfiniteScroll
          dataLength={photos.length} //This is important field to render the next data
          next={()=>setPageNumber(pageNumber + 1)}
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
                  key={item.id}
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
export default Search;
