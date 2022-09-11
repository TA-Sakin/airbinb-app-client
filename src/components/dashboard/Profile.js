import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const { currentUser: user } = useAuth();
  return (
    <div>
      <div className="m-5">
        <p className="font-bold">Name: {user?.displayName}</p>
        <p className="font-bold">Email: {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
