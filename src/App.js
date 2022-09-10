import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/shared/Navigation";
import PageNotFound from "./components/shared/PageNotFound";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

