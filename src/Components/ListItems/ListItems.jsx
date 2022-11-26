import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import List from "./List";
import Search from "./Search/Search";
import PageButtons from "./PageButtons";

function ListItems() {
  // get search params ***** ✔
  const [searchParams, setSearchParams] = useSearchParams();
  const params = [
    { page: Number(searchParams.get("page") || 1) },
    { notFound: searchParams.get("NotFound") || false },
    { name: searchParams.get("name") || "" },
    { gender: searchParams.get("gender") || "" },
    { status: searchParams.get("status") || "" },
    { species: searchParams.get("species") || "" },
  ];

  // fetch characters with specific params ***** ✔
  // ====> chars[0] = data / chars[1] = pages length 🔍
  const [chars, setChars] = useState([]);
  const getChars = (params) => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;
    fetch(`https://rickandmortyapi.com/api/character/?${params}`, { signal })
      .then((res) => res.json())
      .then((data) =>
        data.error
          ? setNotFound()
          : setChars([data?.results, data?.info.pages ? data?.info.pages : 1])
      )
      .catch(() => abortCont.abort());
  };

  // useEffect whenever params update ✔
  useEffect(() => {
    const finalParams = [];
    params.map((q) => {
      const queryEnt = Object.entries(q)[0];
      if (queryEnt[1] != "") {
        finalParams.push(`${queryEnt[0]}=${queryEnt[1]}`);
      }
    });

    getChars(finalParams.join("&"));
  }, [searchParams]);

  // functions for updating params ✔
  // 1/3 ✔
  // concept of updating specific query: 🔍
  // const newQueries = new URLSearchParams(searchParams.toString());
  // newQueries.set("page", params[0].page + 1);
  // setSearchParams(newQueries.toString());
  const setPage = (type, page = "") => {
    const newQueries = new URLSearchParams(searchParams.toString());

    if (
      (type == "nextPage" || type == "nextSelect") &&
      params[0].page < chars[1] - 1
    ) {
      newQueries.set("page", params[0].page + 1);
    } else if (
      (type == "prevPage" || type == "prevSelect") &&
      params[0].page > 1
    ) {
      newQueries.set("page", params[0].page - 1);
    } else if (type == "firstLastPage") {
      page == "lastPage"
        ? newQueries.set("page", chars[1] - 1)
        : newQueries.set("page", 1);
    }

    setSearchParams(newQueries.toString());
  };

  // 2/3 ✔
  const setNotFound = () => {
    setSearchParams({ NotFound: !params[1].notFound });
  };

  // 3/3 ✔
  // update/reset filter-queries in searchInput Component (needed useRef current values) 🔍

  return (
    <div className="bg-gray-800 min-h-[450px]">
      {chars.length !== 0 ? (
        <>
          <Search />
          {!params[1].notFound ? (
            <>
              <List chars={chars} />
              <PageButtons
                setPage={setPage}
                pages={chars[1]}
                page={params[0].page}
              />
            </>
          ) : (
            <div className="text-yellow-500 p-8 text-5xl text-center mt-3">
              Not Found 💔
            </div>
          )}
        </>
      ) : (
        <div className="relative pt-40 w-full">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}

export default ListItems;
