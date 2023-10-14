"use client";

import React, { useEffect } from "react";

const SearchBox = ({ filterFunctions }) => {
  useEffect(() => {
    if (filterFunctions?.searchData != undefined) {
      filterFunctions?.setSearchQuery(filterFunctions?.searchData.searchText);
    }
  }, [filterFunctions?.searchData]);

  return (
    <div className="search_area">
      <input
        type="text"
        className="form-control"
        placeholder="What are you looking for?"
        defaultValue={
          filterFunctions?.searchData != undefined
            ? filterFunctions?.searchData.searchText
            : ""
        }
        onChange={(e) => filterFunctions?.setSearchQuery(e.target.value)}
      />
      <label>
        <span className="flaticon-search" />
      </label>
    </div>
  );
};

export default SearchBox;
