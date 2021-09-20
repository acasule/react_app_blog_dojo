// custom hool for fetching data
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setBlogs] = useState(null);
  const [isPanding, setIsPanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // AbortController we use to prevent error message when switching
    // menu tabs too fast. The data we fetch do not have enough time to load
    // on page and the error occure (in console).
    // signal: abortController.signal is optional additional parameter in fetch method
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetc data for the resource");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPanding(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPanding(false);
          setError(err.message);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  // Empty array as a second parameter is dependency array. If this array is empty,
  // useEffect will be triggered only on first render of component.
  // If we want to trigger useEffect when some parameter is changed, then we set that
  // parameter in this array.
  return { data, isPanding, error };
};

export default useFetch;
