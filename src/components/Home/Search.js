import React, { useState } from "react";

const Search = ({ onSearchHandler }) => {
  // sm:left-1/2 sm:transform sm:-translate-x-1/2
  //   right-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:left-[40%]
  return (
    <div className="fixed top-3 right-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:left-[50%] ">
      <div className="form-control flex items-center">
        <input
          onChange={onSearchHandler}
          type="search"
          className="sm:w-80 text-md pt-2 pb-3 rounded-full border-2 border-gray-200 pl-6 pr-3 focus:outline-none focus:border-gray-300 hover:shadow-md "
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Search;
