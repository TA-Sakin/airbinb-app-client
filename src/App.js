import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import Navigation from "./components/shared/Navigation";
import PageNotFound from "./components/shared/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import PublicRoute from "./components/auth/PublicRoute";
import PropertyList from "./components/Home/PropertyList";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<PropertyList />}></Route>
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
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

