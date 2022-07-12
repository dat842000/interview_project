import { useState, useEffect } from "react";
import axios from "axios";

function useDataFetching(dataSource, pageNumber, setPageNumber) {
    // const [loading, setLoading] = useState(true);
    const [results, setResults] = useState([]);
    // const [error, setError] = useState("");
    const [hasMore, setHasMore] = useState(true);

    const fetchData = async () => {
        const res = await axios({
          method: "Get",
          url: dataSource,
          params: { page: pageNumber },
        });
        
        setResults([...results, ...res.data]);
        setHasMore(res.data.length > 0);
        setPageNumber(pageNumber + 1);
      };
    
      useEffect(() => {
        fetchData();
      }, []);

      return{
        results,
        pageNumber,
        hasMore
      };
}
export default useDataFetching