import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/shared/PageNotFound";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;

