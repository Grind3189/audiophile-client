import { useEffect, useState } from "react";
import { makeRequest } from "../utils/makeRequest";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false)
        setLoading(true);
        const { data } = await makeRequest.get(url);
        setData(data.data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  console.log(loading)

  return {data, loading, error}
};

export default useFetch;
