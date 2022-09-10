import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/SignUp";
import Navigation from "./components/shared/Navigation";
import PageNotFound from "./components/shared/PageNotFound";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

