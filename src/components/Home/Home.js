import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Navigation from "../Header/Navigation";
import Loading from "../shared/Loading";
import PropertyList from "./PropertyList";
import Search from "./Search";
import axios from "axios";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(8);
  const scrollToEnd = () => {
    setPage(page + 8);
  };
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  const onSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };

  useEffect(() => {
    let CancelToken = axios.CancelToken;
    let cancel;
    axios({
      method: "GET",
      url: "http://localhost:5000/properties",
      params: { query: searchField, page: page },
      cancelToken: new CancelToken((c) => (cancel = c)),
    })
      .then(({ data }) => {
        setFilteredProperties(data);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [page, searchField]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="">
      <Navigation className="lg:px-20 md:px-16 px-8" />
      {!filteredProperties.length && (
        <p className="text-center font-semibold text-gray-500">
          No data found!
        </p>
      )}
      <Search onSearchHandler={onSearchChange} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
};

export default Home;
