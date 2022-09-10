import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="w-auto bg-base-100 mb-10">
      <div className="">
        <img
          src={`${
            property.fields.xl_picture_url ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU"
          }`}
          className="h-80 w-full rounded-lg object-cover"
          alt="property"
        />
      </div>
      <div className="">
        <p className="text-base font-semibold">
          {property.fields.host_location}
        </p>
        <p>{property.fields.property_type}</p>
        <p>${property.fields.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
