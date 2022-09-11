import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Header/Navigation";
import Banner from "./Banner";
import Descriptions from "./Descriptions";
import Reserve from "./Reserve";

const PropertyDetails = () => {
  const { id } = useParams();
  const { state: property } = useLocation();
  const { fields } = property;

  const navigate = useNavigate();
  return (
    <div className="">
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
        {/* <section>
          <div className="hero w-full mx-auto ">
            <div className="hero-content flex-col lg:flex-row">
              <div className="card lg:card-side bg-base-100">
                <div className="card-body ">
                 
                </div>
              </div>
              <div className="card flex-shrink-0 w-full max-w-md bg-base-100">
                <div className="card-body">
                  <form>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        readOnly
                        type="name"
                        className="input input-bordered rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        readOnly
                        type="text"
                        className="input input-bordered rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Quantity</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Order quantity"
                        className="input input-bordered rounded-none"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered rounded-none"
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input
                        placeholder="Your address"
                        type="text"
                        className="input input-bordered rounded-none"
                      />
                    </div>
                    <div className="form-control mt-6">
                      <input
                        className="btn bg-black rounded-none w-full max-w-sm"
                        value="Reserve"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default PropertyDetails;
