import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Navigation from "../Header/Navigation";
import Loading from "../shared/Loading";
import PropertyList from "./PropertyList";
import Search from "./Search";

const Home = () => {
  const { token } = useAuth();
  const [searchField, setSearchField] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [loading, setLoading] = useState(true);

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, [token]);

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
      <Navigation className="lg:px-20 md:px-16 px-8" />
      <Search onSearchHandler={onSearchChange} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
