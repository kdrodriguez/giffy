import React from "react";
import Gif from "./Gif";
import "./GifsLis.css";

const GifsList = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map((gif) => (
        <Gif key={gif.id} title={gif.title} url={gif.url} id={gif.id} />
      ))}
    </div>
  );
};

export default React.memo(GifsList);
