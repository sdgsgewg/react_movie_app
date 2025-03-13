import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="./img/search.svg" alt="Search" />

        <input
          type="text"
          placeholder="Search through thousand of movies"
          name={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          id="search"
        />
      </div>
    </div>
  );
};

export default Search;
