import React, { useState, useEffect } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import { Link } from "wouter";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return (
    <ul>
      {trends.map((trend) => (
        <li key={trend}>
          <Link to={`/search/${trend}`}> {`${trend}' Gifs`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingSearches;
