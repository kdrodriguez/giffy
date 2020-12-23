import React, { useCallback, useRef, useEffect } from "react";
import GifsList from "../components/GifsList";
import useGifs from "../hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  //const handleNextPage = () => setPage((prevPage) => prevPage + 1);

  //const handleNextPage = () => console.log("next page");

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) debounceHandleNextPage();
  }, [debounceHandleNextPage, isNearScreen]);

  return (
    <>
      {loading ? "Loading ..." : <GifsList gifs={gifs} />}
      <div id="visor" ref={externalRef}></div>
      {/* <button onClick={handleNextPage}> Next page </button> */}
    </>
  );
};

export default SearchResults;
