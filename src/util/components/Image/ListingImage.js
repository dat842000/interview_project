import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageSkeleton from "./ImageSkeleton";
import { ImageCard } from "./ImageCard";

const ListingImage = props => {
  return (
    <InfiniteScroll
      dataLength={props.items.length} //This is important field to render the next data
      next={props.loadItems}
      hasMore={props.hasMore}
      loader={<ImageSkeleton quantity={6} />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className=" min-w-0  grid grid-cols-3 items-center">
        {props.items.map((item, index) => {
          return (
            <ImageCard item={item} key={index} />
          );
        })}
      </div>
    </InfiniteScroll>
  );
};
export default ListingImage
