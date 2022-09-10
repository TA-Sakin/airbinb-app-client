import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { FaUserCircle } from "react-icons/fa";
const Navigation = () => {
  const { currentUser: user } = useAuth();
  return (
    <div>
      <div className="navbar bg-base-100 px-10 shadow-md z-30 sticky">
        <div className="flex-1">
          <Link to="/">
            <span className="btn btn-ghost no-animation normal-case text-xl">
              Airbnb App
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label
              tabIndex="0"
              className="btn btn-ghost btn-circle avatar placeholder"
            >
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <FaUserCircle />
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
                    <span className="justify-between">Logout</span>
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
