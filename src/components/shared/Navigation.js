import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
const Navigation = () => {
  const { currentUser: user, logout } = useAuth();
  return (
    <div>
      <div className="navbar bg-base-100 lg:px-20 md:px-16 px-8 shadow-md z-100 sticky top-0">
        <div className="flex-1">
          <Link to="/">
            <span className="cursor-pointer normal-case text-xl font-semibold">
              Airbnb App
            </span>
          </Link>
        </div>
        <div className="flex-none">
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
              {user ? (
                <>
                  <li>
                    <Link to="/dashboard/profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <span className="justify-between" onClick={() => logout()}>
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="justify-between">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="justify-between">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
