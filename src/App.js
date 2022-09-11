import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import PageNotFound from "./components/shared/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./components/auth/PublicRoute";
import Home from "./components/Home/Home";
import PropertyDetails from "./components/Details/PropertyDetails";
import RequireAuth from "./components/auth/RequireAuth";
import Reserve from "./components/Details/Reserve";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
import MyBookings from "./components/dashboard/MyBookings";
import AddReview from "./components/dashboard/AddReview";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/reserve/:id"
          element={
            <RequireAuth>
              <Reserve />
            </RequireAuth>
          }
        ></Route>

        <Route path="/details/:id" element={<PropertyDetails />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="mybooking" element={<MyBookings></MyBookings>}></Route>
          <Route path="review/:id" element={<AddReview></AddReview>}></Route>
        </Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

