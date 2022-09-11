import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProfileDropDown = () => {
  const { currentUser: user, logout } = useAuth();

  return (
    <>
      {user ? (
        <>
          <li>
            <Link to="/dashboard" className="justify-between">
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
    </>
  );
};

export default ProfileDropDown;
