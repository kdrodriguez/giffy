import React from "react";
//import GifsContext from "../context/GifsContext";
import Gif from "components/Gif";
import useGlobalGifs from "hooks/useGlobalGifs";

const Detail = ({ params }) => {
  //const { gifs } = useContext(GifsContext);
  const gifs = useGlobalGifs();

  const gif = gifs.find((gif) => gif.id === params.id);

  return <Gif {...gif} />;
};

export default Detail;
