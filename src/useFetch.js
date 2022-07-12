import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [IsPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("couldnt fetch the data from that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.data.users);
        setData(data.data.users);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if(err.name === 'AbortError'){
            console.log('fetch aborted')
        }else{
        setError(err.message);
        setIsPending(false);
        }
      });
      return () => abortCont.abort();
  }, [url]);

  return {data , IsPending , error}
};

export default useFetch;