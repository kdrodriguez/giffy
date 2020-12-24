import React, { useCallback, useRef, useEffect } from "react";
import GifsList from "../components/GifsList";
import useGifs from "../hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import { Helmet } from "react-helmet";

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `Showing ${keyword} gifs` : loading ? "Cargando..." : "";

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
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title}></meta>
      </Helmet>
      {loading ? "Loading ..." : <GifsList gifs={gifs} />}
      <div id="visor" ref={externalRef}></div>
      {/* <button onClick={handleNextPage}> Next page </button> */}
    </>
  );
};

export default SearchResults;
