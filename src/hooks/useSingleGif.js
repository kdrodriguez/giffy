import { useState, useEffect } from "react";
import getSingleGif from "services/getSingleGif";
import useGifs from "./useGifs";

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsEror] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      //lamar al servicio si no hay un gif
      getSingleGif({ id })
        .then((gif) => {
          setGif(gif);
          setIsLoading(false);
          setIsEror(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsEror(true);
        });
    }
  }, [gif, id]);

  return { gif, isLoading, isError };
};

export default useSingleGif;
