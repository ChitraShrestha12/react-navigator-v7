import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    setError(null)
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message)
        console.error(err);
      }finally{
        setLoading(false)
      }
    }
    fetchData();
  }, [url]);
  return [data,loading,error];
}

export default useFetch;
