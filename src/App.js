import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./route/Home";
import "./App.css";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <header>
        <Link to="/movie_app" className="page">
          Home page
        </Link>
        <input className="search" type={"search"} placeholder="Search" />
      </header>
      <Routes>
        <Route path="/movie_app" element={<Home />} />
        <Route path="/movie_details" element={<Detail />} />
      </Routes>
    </>
  );
}
export default App;
