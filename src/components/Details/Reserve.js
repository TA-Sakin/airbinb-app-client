import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navigation from "../Header/Navigation";
import Loading from "../shared/Loading";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

const defaultFormFields = {
  guests: "",
  phone: "",
};
const Reserve = () => {
  const [openDate, setOpenDate] = useState(false);
  const [property, setProperty] = useState({});
  const { currentUser: user } = useAuth();
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { guests, phone } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reserve/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data.fields));
  }, [id]);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0].endDate, date[0].startDate);
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(date[0].startDate, date[0].endDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (days === 0) {
      setError("Select a date");
    } else if (parseInt(guests) < 1) {
      setError("Enter the number of guests");
    } else {
      const reserve = {
        propertyId: id,
        dateRange: alldates,
        price: parseInt(property?.price) * days,
        customerEmail: user.email,
        customerName: user.displayName,
        phone,
        guests,
        location: property.smart_location,
        propertyType: property.property_type,
      };
      fetch("http://localhost:5000/reserve", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(reserve),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(
              `${property.property_type} booked for ${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`
            );
            setError("");
            setDate([
              {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
              },
            ]);
            resetFormFields();
          } else {
            toast.error(`Something went wrong.`);
          }
        });
    }
  };

  if (!property) {
    return <Loading />;
  }

  return (
    <div>
      <Navigation className="lg:px-48 sm:px-16 px-10" />
      <div className="max-w-sm mx-auto my-20">
        <form onSubmit={handleSubmit}>
          <div>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="btn btn-outline lowercase flex justify-between border-2 hover:bg-gray-200 w-full hover:text-black max-w-sm"
            >
              <FaRegCalendarAlt className="text-gray-500 text-xl" />
              <span>
                {`${format(date[0].startDate, "MM/dd/yyyy")}`} to{" "}
                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
            </span>
          </div>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="w-full max-w-sm"
            />
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Guests</span>
            </label>
            <input
              type="number"
              name="guests"
              className="input input-bordered max-w-sm rounded-xl"
              placeholder="Number of guests"
              onChange={handleChange}
              value={guests}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              className="input input-bordered rounded-xl max-w-sm"
              placeholder="Phone number"
              onChange={handleChange}
              value={phone}
              required
            />
          </div>
          <div className="form-control">
            <div className="border-2 py-3 px-3 mt-3 rounded-xl max-w-sm">
              <span className="font-bold">
                Price: $
                {days
                  ? parseInt(property?.price) * days + ` for ${days} nights`
                  : property?.price + " per night"}
              </span>
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              className="btn btn-secondary rounded-xl w-full max-w-sm"
              type="submit"
            >
              Reserve
            </button>
          </div>
          <div className="bg-red-500 mt-5">
            {error && (
              <span className="text-white py-2 text-base flex justify-center items-center mt-3">
                <AiOutlineExclamationCircle className="mr-1" />
                {error}
              </span>
            )}
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Reserve;
