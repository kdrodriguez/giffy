import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nav other route
    onSubmit({ keyword });
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search a gif here ..."
        onChange={handleChange}
        type="text"
        value={keyword}
      />
      <button> Search </button>
    </form>
  );
};

export default React.memo(SearchForm);
