import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestoCard from "./RestoCard";
import useRestList from "../utiles/useRestList";
import Shimmer from "./Shimmer";
const Body = () => {
  // useState Variables

  const [searchText, setSearchText] = useState(""); //useState for search

  // using custom hook
  const [restList, filteredRestaurants, setFilteredRestaurants] = useRestList();

  // useEffect for search 
  useEffect(() => {
    const filteredRestaurants = restList.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  }, [searchText, restList]);

  if (!restList.length) return <Shimmer />;
  return (
    <div className="body">
      <div className="filter-container flex gap-10">
        {/* search button */}

        <div className="m-2 p-3 flex justify-center items-center gap-2 w-full">
          <input
            type="text"
            className=" border border-gray-400 px-5 py-1 rounded-xl w-full max-w-[600px] focus:outline-none bg-white text-black caret-black"
            value={searchText}
            placeholder="Search Restaurant"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="px-4 py-1 bg-[#5333ed] text-white border rounded-xl cursor-pointer">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 m-4 p-4 gap-3 ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="card-link"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestoCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
