import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import BookingTable from "./BookingTable";

const MyBookings = () => {
  const { currentUser: user } = useAuth();
  const [reserves, setReserves] = useState();
  useEffect(() => {
    fetch(
      `https://airbnb-app-server-production.up.railway.app/reserve?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReserves(data));
  }, [user.email]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Property</th>
              <th>
                Price <span className="lowercase">/night</span>
              </th>
              <th>Date Range</th>
              <th>Location</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {reserves?.map((reserve, i) => (
              <BookingTable
                key={reserve._id}
                i={i}
                reserve={reserve}
              ></BookingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
