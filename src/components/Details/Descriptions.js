import React from "react";
import { BsFillAwardFill } from "react-icons/bs";
import { GrKey } from "react-icons/gr";
import { FaRegStickyNote } from "react-icons/fa";

const Descriptions = ({ fields }) => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 pr-24">
        <p className="text-2xl font-semibold">
          {fields.property_type} hosted by {fields.host_name}
        </p>
        <div className="flex gap-1 font-normal mb-8">
          <p>
            {fields?.guests_included > 1
              ? fields.guests_included + " guests"
              : fields.guests_included + " guest"}
          </p>
          .
          <p>
            {fields?.bedrooms > 1
              ? fields.bedrooms + " bedrooms"
              : fields.bedrooms + " bedroom"}
          </p>
          .
          <p>
            {fields?.beds > 1 ? fields.beds + " beds" : fields.beds + " bed"}
          </p>
          .
          <p>
            {fields?.bathrooms > 1
              ? fields.bathrooms + " bathrooms"
              : fields.bathrooms + " bathroom"}
          </p>
        </div>
        <hr />
        <div className="my-10">
          <div>
            <p className="text-lg font-semibold">
              <span className="flex gap-3 items-center">
                <BsFillAwardFill className="text-2xl" />{" "}
                <span>{fields.host_name} is a Superhost </span>
              </span>
            </p>
            <p className="text-gray-500 pl-9">
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for their guests.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-lg font-semibold">
              <span className="flex gap-3 items-center">
                <GrKey className="text-2xl" />{" "}
                <span>Great check-in experience</span>
              </span>
            </p>
            <p className="text-gray-500 pl-9">
              95% of recent guests gave the check-in process a 5-star rating.
            </p>
          </div>
          <div className="mt-5">
            <p className="text-lg font-semibold">
              <span className="flex gap-3 items-center">
                <FaRegStickyNote className="text-2xl" />{" "}
                <span>Free cancellation possible</span>
              </span>
            </p>
          </div>
        </div>
        <hr />
        <div className="mt-10">
          <p>{fields.description}</p>
        </div>
      </div>
    </>
  );
};

export default Descriptions;
