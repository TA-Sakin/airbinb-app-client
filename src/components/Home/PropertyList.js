import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=100&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=features"
    )
      .then((res) => res.json())
      .then((data) => setProperties(data.records));
  }, []);
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center mx-auto gap-5 lg:px-20 md:px-16 px-8">
      {properties.map((property) => (
        <PropertyCard key={property.recordid} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
