import React from "react";
//import GifsContext from "../context/GifsContext";
import Gif from "components/Gif";
import useGlobalGifs from "hooks/useGlobalGifs";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
//import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

const Detail = ({ params }) => {
  //const { gifs } = useContext(GifsContext);
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";
  //useSEO({ title, description: `Detail of ${title}` });

  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        "Loading..."{" "}
      </>
    );
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} | Giffy</title>
      </Helmet>
      <h3> {gif.title} </h3>
      <Gif {...gif} />
    </>
  );
};

export default Detail;
