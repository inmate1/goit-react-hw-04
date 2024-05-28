import { useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const handleSearchBar = (searchValue) => {
    console.log(searchValue);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearchBar} />
      <Loader />
    </>
  );
}

export default App;
