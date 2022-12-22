import React from "react";

function Search({searchInput, searchPlant}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchInput}
        placeholder="Type a name to search..."
        onChange={(e) => searchPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
