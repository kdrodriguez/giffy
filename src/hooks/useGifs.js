import { useState, useEffect, useContext } from "react";
import getGifs from "../services/getGifts";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadinNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  // Busca la keyword u obtiene la última busqueda del storage
  const keywordToSearch =
    keyword || localStorage.getItem("lastKeyword") || "eeuu";

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToSearch }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem(
        "lastKeyword",
        keyword === null ? "Indiana" : keyword
      );
    });
  }, [, keyword, keywordToSearch, setGifs]); // Hace a keyword dependiente a cambios

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadinNextPage(true);
    getGifs({ keyword: keywordToSearch, page }).then((nextGifs) => {
      setGifs((prevGifs) => prevGifs.concat(nextGifs));
      setLoadinNextPage(false);
    });
  }, [keywordToSearch, page]);

  return { loading, loadingNextPage, gifs, setPage };
};

export default useGifs;
