import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestoCard from "./RestoCard";
import { CDN_URL } from "../utiles/Constants";
const Body = () => {
  // useState Variables
  const [restList, setRestList] = useState([]); //useState for filter
  const [btnName, setBtnName] = useState("Top Rated Restaurant"); //useState for filter button
  const [searchText, setSearchText] = useState(""); //useState for search
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  console.log("body rendered");
  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredRestaurants = restList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  }, [searchText, restList]);

  // Data Fetching
  const fetchData = async () => {
    const data = await fetch(CDN_URL);

    //convert data in to json format
    const json = await data.json();
    console.log(json);

    // taking specific  data from API
    setRestList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // filter Function
  const topRatedRestaurants = () => {
    const filterList = restList.filter((res) => res.info.avgRating > 4.5);
    setFilteredRestaurants(filterList);
  };

  // filter button function
  const BtnChangeName = () => {
    setBtnName("Restaurant Above 4.5 Star");
  };

  return (
    <div className="body">
      <div className="filter-container flex gap-10">
        {/* search button */}

        <div className="m-2 p-3 ">
          <input
            type="text"
            className=" border border-solid border-gray-400 px-5 rounded-sm"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button className="px-4 mx-2 bg-orange-500 text-white border border-solid border-gray-400 rounded-sm ">
            Search
          </button>
        </div>
        {/* filter button */}
        <div className="flex items-center">
          <button
            className="px-4 mx-2 bg-orange-500 text-white border border-solid border-gray-400 rounded-sm "
            onClick={() => {
              topRatedRestaurants(); //calling function
              BtnChangeName(); //calling function
            }}
          >
            {btnName}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 m-4 p-4 gap-3 ">
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
