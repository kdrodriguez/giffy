import React, { useCallback } from "react";
import { Link, useLocation } from "wouter";
import useGifs from "hooks/useGifs";
import GifsList from "components/GifsList";
import TrendingSingle from "../components/TrendingSingle";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

const DEFAULT_GIFS = ["Japan", "Football", "Science", "Programming"];

const Home = () => {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleSubmit = useCallback(
    ({ keyword }) => {
      // Nav other route
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  /* const element = useMemo(() => <SearchForm onSubmit={handleSubmit} />, [
    handleSubmit,
  ]); Usememo not recommended, use React.memo instead*/

  return (
    <>
      {/* {element} */}
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm onSubmit={handleSubmit} />
      <ul>
        {DEFAULT_GIFS.map((keywordGif) => (
          <li key={keywordGif}>
            <Link to={`/search/${keywordGif}`}> {`${keywordGif}' Gifs`}</Link>
          </li>
        ))}
      </ul>
      <h4> Last gifs</h4>
      <GifsList gifs={gifs} />
      <h4> Popular Gifs </h4>
      <TrendingSingle />
    </>
  );
};

export default Home;
