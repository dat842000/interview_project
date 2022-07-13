import { React, useEffect, useState } from "react";
import axios from "axios";
import useInfiniteLoading from "../../util/hocComponents/UseInfiniteLoading";
import ListingImage from "../../util/components/Image/ListingImage";
import Nav from "../../util/components/Nav/Navbar";
import ImageBanner from "../../util/components/Image/ImageBanner";

const HomeSection = () => {
  const CLIENT_ID = "wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
  const MAX_NUMBER_OF_RANDOM_PHOTO = 30;

  const getItems = async ({ page }) => {
    let url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}`;
    const res = await axios({
      method: "Get",
      url: url,
      params: { count: MAX_NUMBER_OF_RANDOM_PHOTO, page: page },
    });
    return res.data;
  };
  const { items, hasMore, loadItems } = useInfiniteLoading({
    getItems,
  });

  useEffect(()=>{
    loadItems()
  },[])

  return (
    <>
      <Nav />
      <ImageBanner/>
      <div className="h-6"></div>
      <ListingImage hasMore={hasMore} loadItems={loadItems} items={items}  />
    </>
  );
};
export default HomeSection;
