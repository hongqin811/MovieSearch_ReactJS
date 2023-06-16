import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import "./css/style.css";

function App() {
  return (
    <>
      <Navbar />
      <Search />
    </>
  );
}

export default App;
