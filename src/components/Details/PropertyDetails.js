import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../Header/Navigation";

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Navigation />
      <p>Details page</p>
    </div>
  );
};

export default PropertyDetails;
