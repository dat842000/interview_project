import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import useInfiniteLoading from "../../util/hocComponents/UseInfiniteLoading";
import ListingImage from "../../util/components/Image/ListingImage";
import Nav from "../../util/components/Nav/Navbar";
import ImageBanner from "../../util/components/Image/ImageBanner";

export const TopicSection = () => {
  const CLIENT_ID = "wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
  const { topicId } = useParams();
  const getItems = async ({ page }) => {
    let url = `https://api.unsplash.com/topics/${topicId}/photos?client_id=${CLIENT_ID}`;
    const res = await axios({
      method: "Get",
      url: url,
      params: { page: page },
    });
    return res.data;
  };

  const { items, hasMore, loadItems } = useInfiniteLoading({
    getItems,
  });

  useEffect(() => {
    loadItems();
  }, [topicId]);

  return (
    <>
      <Nav topicId={topicId}/>
      <ImageBanner topic={topicId}/>
      <div className="h-6"></div>
      <ListingImage hasMore={hasMore} loadItems={loadItems} items={items}  />
    </>
  );
};
