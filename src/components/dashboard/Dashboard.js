import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navigation from "../Header/Navigation";

const Dashboard = () => {
  return (
    <div>
      <Navigation className="lg:px-16 px-8 z-50" />
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <div className="ml-3">
            <label htmlFor="dashboard-sidebar" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 text-purple-500 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 cursor-pointer overflow-y-auto w-64 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard" className="font-semibold">
                My Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/mybooking" className="font-semibold">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
