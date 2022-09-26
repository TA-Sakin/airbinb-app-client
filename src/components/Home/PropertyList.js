import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import Loading from "../shared/Loading";
import PropertyCard from "./PropertyCard";
const PropertyList = ({ properties }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center mx-auto gap-5 lg:px-20 md:px-16 px-8">
      {properties?.map((property) => (
        <PropertyCard key={property.recordid} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
