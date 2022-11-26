import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";

function Search() {
  const navigate = useNavigate();

  return (
    <div className="text-white pt-12 pb-5">
      <h1
        onClick={() => navigate("search")}
        className="text-center cursor-pointer text-xl border-b w-fit mx-auto px-5 py-2"
      >
        Search your favourite charachters 🔍{" "}
        <span className="text-sm text-gray-400">(Click)</span>
      </h1>

      <Routes>
        <Route path="search" element={<SearchInput />} />
      </Routes>
    </div>
  );
}

export default Search;
