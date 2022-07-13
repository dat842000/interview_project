import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import useInfiniteLoading from "../../util/hocComponents/UseInfiniteLoading";
import ListingImage from "../../util/components/Image/ListingImage";
import ImageBanner from "../../util/components/Image/ImageBanner";

const SearchSection = () => {
  const CLIENT_ID = "wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg";
  const { photoName } = useParams();
  const getItems = async ({ page }) => {
    let url = `https://api.unsplash.com/search/photos?query=${photoName}&client_id=${CLIENT_ID}`;
    const res = await axios({
      method: "Get",
      url: url,
      params: { page: page },
    });
    return res.data.results;
  };

  const { items, hasMore, loadItems } = useInfiniteLoading({
    getItems,
  });

  useEffect(() => {
    loadItems();
  }, [photoName]);

  return (
    <>
      <ImageBanner/>
      <div className="h-6"></div>
      <ListingImage hasMore={hasMore} loadItems={loadItems} items={items} />
    </>
  );
};
export default SearchSection;
