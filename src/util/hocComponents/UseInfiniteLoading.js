import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";

const useInfiniteLoading = (props) => {
  const { getItems } = props;
  const [items, setItems] = useState([]);
  const { topicId } = useParams();
  const { photoName } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadItems = async () => {
    const data = await getItems({
      page: pageNumber,
    });

    setHasMore(true);
    setPageNumber((pageNumber) => pageNumber + 1);
    setItems((prevItems) => [...prevItems, ...data]);
  };

  useMemo(() => {
    setPageNumber(1);
    setItems([]);
  }, [topicId, photoName]);

  return {
    items,
    hasMore,
    loadItems,
    pageNumber,
  };
};

export default useInfiniteLoading;
