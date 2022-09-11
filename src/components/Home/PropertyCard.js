import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`details/${property._id}`, { state: property });
  };
  const { fields } = property;
  return (
    <div
      onClick={handleNavigate}
      className="w-auto cursor-pointer bg-base-100 mb-10"
    >
      <div>
        <img
          src={`${
            fields.xl_picture_url ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU"
          }`}
          className="h-80 w-full rounded-lg object-cover"
          alt="property"
        />
      </div>
      <div className="mt-3">
        <div className="flex justify-between">
          <p className="text-base font-bold ">
            {fields.property_type} in {fields.country}
          </p>
          <span className="flex gap-1 items-center">
            <AiFillStar /> <span>5.00</span>
          </span>
        </div>
        <p className="text-gray-500 text-sm font-semibold">
          {fields.name?.length > 35
            ? fields.name.slice(0, 35) + " ..."
            : fields.name}
        </p>
        <p>{fields?.beds > 1 ? fields.beds + " beds" : fields.beds + " bed"}</p>
        <p>
          <span className="font-bold">${fields.price}</span> <span> night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
