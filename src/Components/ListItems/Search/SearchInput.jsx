import { useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";

function SearchInput() {
  // ref ✔
  const searchRef = useRef("");
  const genderRef = useRef("");
  const statusRef = useRef("");
  const speciesRef = useRef("");

  // search params
  const [searchParams, setSearchParams] = useSearchParams();

  // update filter queries ✔
  const filterQueries = (e) => {
    e.preventDefault();
    const query = [
      [searchRef.current.name, searchRef.current.value],
      [genderRef.current.name, genderRef.current.value],
      [statusRef.current.name, statusRef.current.value],
      [speciesRef.current.name, speciesRef.current.value],
    ];

    const finalQuery = [];
    query.map((q) => {
      if (q[0] !== q[1] && q[1] !== "") {
        finalQuery.push(`${q[0]}=${q[1]}`);
      }
    });

    setSearchParams(finalQuery.join("&"));
  };

  const resetFormParams = () => {
    setSearchParams("");
  };

  return (
    <div className="flex items-start justify-center mt-5">
      <form onSubmit={(e) => filterQueries(e)}>
        <div>
          <input
            name="name"
            ref={searchRef}
            placeholder="Type Character's name"
            type="text"
            className="bg-gray-400 w-full text-gray-900 placeholder:text-gray-600 rounded outline-none p-2"
          />

          <div className="mt-5 justify-between flex">
            <select ref={genderRef} className="select__list" name="gender">
              <option value="gender">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <select ref={statusRef} className="select__list mx-5" name="status">
              <option value="status">Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
            </select>

            <select ref={speciesRef} className="select__list" name="species">
              <option value="species">Species</option>
              <option value="human">Human</option>
              <option value="alien">Alien</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <button
            type="submit"
            className="text-yellow-400 mb-2 transition-opacity hover:opacity-100 opacity-80 rounded border-yellow-400 border"
          >
            Search
          </button>

          <div className="flex">
            <button
              onClick={() => resetFormParams()}
              type="reset"
              className="bg-transparent border hover:opacity-100 transition-opacity opacity-70 flex-1 border-blue-400 text-blue-400 rounded-md mr-3"
            >
              Reset
            </button>

            <Link
              to="/"
              className="bg-transparent text-center hover:opacity-100 transition-opacity opacity-70 border flex-1 border-red-400 text-red-400 rounded-md"
            >
              Close
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
