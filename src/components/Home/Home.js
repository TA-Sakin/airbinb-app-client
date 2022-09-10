import React, { Fragment, useEffect, useState } from "react";
import Navigation from "../Header/Navigation";
import Loading from "../shared/Loading";
import PropertyList from "./PropertyList";
import Search from "./Search";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [loading, setLoading] = useState(true);
  const onSearchChange = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch(
      "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=100&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=features"
    )
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.records);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const newFilteredProperties = properties?.filter((property) =>
      property.fields.property_type.toLowerCase().includes(searchField)
    );
    setFilteredProperties(newFilteredProperties);
  }, [searchField, properties]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="">
      <Navigation />
      <Search onSearchHandler={onSearchChange} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
