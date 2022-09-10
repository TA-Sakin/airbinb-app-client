import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`details/${property.recordid}`);
  };
  return (
    <div
      onClick={handleNavigate}
      className="w-auto cursor-pointer bg-base-100 mb-10"
    >
      <div>
        <img
          src={`${
            property.fields.xl_picture_url ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU"
          }`}
          className="h-80 w-full rounded-lg object-cover"
          alt="property"
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between">
          <p className="text-base font-bold ">
            {property.fields.property_type} in {property.fields.country}
          </p>
          <span className="flex gap-1 items-center">
            <AiFillStar /> <span>5.00</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm font-semibold">
          {property.fields.name?.length > 35
            ? property.fields.name.slice(0, 35) + " ..."
            : property.fields.name}
        </p>
        <p>
          {property.fields?.beds > 1
            ? property.fields.beds + " beds"
            : property.fields.beds + " bed"}
        </p>
        <p>
          <span className="font-bold">${property.fields.price}</span>{" "}
          <span> night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
