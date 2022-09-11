import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import ProfileDropDown from "./ProfileDropDown";
const Navigation = ({className}) => {
  return (
    <div className={`navbar sticky py-4 top-0 bg-white  shadow-md mb-10 ${className}`}>
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="cursor-pointer sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">
                <span className="cursor-pointer text-lg font-semibold">
                  Airbnb App
                </span>
              </Link>
              <hr />
            </li>

            <li tabIndex={0}>
              <a className="justify-between">
                <label tabIndex="0" className="cursor-pointer">
                  <FaUserCircle className="text-3xl text-gray-500" />
                </label>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-white">
                <ProfileDropDown />
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="sm:flex hidden">
          <span className="cursor-pointer normal-case text-xl font-semibold">
            Airbnb App
          </span>
        </Link>
      </div>
      {/* <div className="navbar-center relative top-3 hidden sm:flex">
        <Search />
      </div> */}
      <div className="navbar-end hidden sm:flex">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="">
            <div className="flex cursor-pointer border-[1px] w-20 py-[5px] rounded-3xl items-center justify-evenly hover:shadow-md">
              <VscThreeBars className="text-lg" />
              <FaUserCircle className="text-3xl text-gray-500" />
            </div>
          </label>
          <ul
            tabindex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <ProfileDropDown />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
