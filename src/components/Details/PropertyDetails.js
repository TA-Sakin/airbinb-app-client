import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Header/Navigation";
import Banner from "./Banner";
import Descriptions from "./Descriptions";
import Reserve from "./Reserve";
import Reviews from "./Reviews";

const PropertyDetails = () => {
  const { id } = useParams();
  const { state: property } = useLocation();
  const { fields } = property;

  const navigate = useNavigate();
  return (
    <div>
      <Navigation className="lg:px-48 sm:px-16 px-10" />
      <div className="lg:px-48 sm:px-16 px-10">
        <section>
          <Banner fields={fields} />
        </section>
        <section className="my-10 w-full ">
          <div className="grid md:grid-cols-3 grid-cols-1">
            <Descriptions fields={fields} />
            {/* <Reserve fields={fields} /> */}
            <div
              className="col-span-1 md:col-span-1"
              onClick={() => navigate(`/reserve/${id}`, { state: fields })}
            >
              <button
                className="btn btn-secondary rounded-xl w-full max-w-sm"
                type="submit"
              >
                Reserve Now
              </button>
            </div>
          </div>
        </section>
        <hr />
        <section className="my-10">
          <Reviews id={id} />
        </section>
      </div>
    </div>
  );
};

export default PropertyDetails;
