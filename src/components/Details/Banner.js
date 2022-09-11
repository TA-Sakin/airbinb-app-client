import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillAwardFill } from "react-icons/bs";

const Banner = ({ fields }) => {
  return (
    <div>
      <p className="text-3xl font-semibold mb-2">{fields.name}</p>
      <div className="flex gap-3 text-sm font-semibold mb-5">
        <p className="flex gap-1 items-center">
          <AiFillStar /> <span>5.00</span>
        </p>
        .
        <p className="flex gap-1 items-center">
          <BsFillAwardFill /> <span>Superhost</span>
        </p>
        .<p className="underline">{fields.smart_location}</p>
      </div>
      <div className="">
        <img
          src={`${
            fields.xl_picture_url ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-y-IJN8glQlf1qoU01dEgGPUa0d1-sjfWg&usqp=CAU"
          }`}
          className="w-full rounded-lg object-cover h-96"
          alt="property"
        />
      </div>
    </div>
  );
};

export default Banner;
