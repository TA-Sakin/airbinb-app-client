import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const BookingTable = ({ reserve, i }) => {
  const startDate = format(new Date(reserve.dateRange[0]), "MM/dd/yyyy");
  const endDate = format(
    new Date(reserve.dateRange[reserve.dateRange.length - 1]),
    "MM/dd/yyyy"
  );
  return (
    <tr>
      <th>{i + 1}</th>
      {/* <div className="flex items-center space-x-3">
        <div>
          <div className="font-bold">{reserve.propertyType}</div>
        </div>
      </div> */}
      <td>{reserve.propertyType}</td>
      <td>${reserve.price}</td>
      <td>
        {startDate}-{endDate}
      </td>
      <td>{reserve.location}</td>
      <td>
        <Link to={`/dashboard/review/${reserve.propertyId}`}>
          <label className="btn btn-secondary btn-sm">Add Review</label>
        </Link>
      </td>
    </tr>
  );
};

export default BookingTable;
